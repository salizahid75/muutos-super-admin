import styled from "styled-components"

import WidgetBox from "components/WidgetBox"
import ProgressBar from "../../../components/ProgressBar"
export default function DeliveryStatus() {
    return (
        <WidgetBox heading='Deliveries Status'>
            <Wrapper>
                <ProgressBar
                    bgcolor={"assetSun"}
                    completed={50}
                    items={542}
                    title={"Pendings"}
                />
                <ProgressBar
                    bgcolor={"assetTeal"}
                    completed={30}
                    items={17459}
                    title={"Delivered"}
                />
                <ProgressBar
                    bgcolor={"assetRed"}
                    completed={10}
                    items={64}
                    title={"Canceled"}
                />
            </Wrapper>
        </WidgetBox>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`
