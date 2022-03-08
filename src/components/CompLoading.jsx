import { Spin } from "antd"

export default function CompLoading() {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
            }}>
            <Spin size='large' />
        </div>
    )
}
