import styled from "styled-components"
import { Select, Input } from "ant"

import { ReactComponent as DownArrowIcon } from "assets/icons/Arrow/Chevron/Down.svg"
import { ReactComponent as SearchIcon } from "assets/icons/Search.svg"

const { Option } = Select

export default function FiltersBar({
    category="",
    title="",
    Width = "",
    placeHolder = "",
    onSearchChange = null,
    filters = null,
    sortBy = null,
    otherFilters = null,
}) {
    return (
        <Wrapper>
            <h4 className="text-white">{title}</h4>
            <h6 className="text-secondary">&nbsp;&nbsp;&nbsp;{category}</h6>
            {onSearchChange && (
                <InputWrapper>
                    <span>
                        <SearchIcon />
                    </span>
                    <Input
                        width={Width ? Width : "350px"}
                        style={{ paddingLeft: "50px" }}
                        onChange={onSearchChange}
                        placeholder={placeHolder ? placeHolder : "Search"}
                    />
                </InputWrapper>
            )}
            <Right>
                {filters && (
                    <Select
                        suffixIcon={<DownArrowIcon />}
                        defaultValue={filters.defaultValue}
                        onChange={filters.noChange}>
                        {filters.filters.map((f, index) => (
                            <Option key={index}>{f}</Option>
                        ))}
                    </Select>
                )}
                {sortBy && (
                    <Select
                        suffixIcon={<DownArrowIcon />}
                        defaultValue={sortBy.defaultValue}
                        onChange={sortBy.onChange}>
                        {sortBy.filters.map((f, index) => (
                            <Option key={f.toLowerCase()}>{f}</Option>
                        ))}
                    </Select>
                )}
                {otherFilters}
            </Right>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const Right = styled.div`
    margin-left: auto;
    & > * {
        margin: 0 10px;

        width: auto !important;
    }
`

const InputWrapper = styled.div`
    position: relative;

    & > span {
        z-index: 1;
        position: absolute;
        top: 50%;
        left: 20px;
        transform: translateY(-40%);
        svg path {
            fill: ${p => p.theme.colors.gray700};
        }
    }
`
