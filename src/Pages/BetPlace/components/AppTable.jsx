import React from "react"
import { Space, Table, Tag } from "antd"
import { data } from "./constants"
import imgQatar from "../../../images/flags/flag_qatar.jpg"

const columns = [
    {
        title: "Nº",
        dataIndex: "match",
        key: "match",
        render: (text) => <p>{text}</p>,
    },
    {
        title: "Match",
        dataIndex: "teamA",
        key: "teamA",
        render: (_, record) => {
            return (
                <p>
                    <img
                        src={`/images/flags/flag_${record.teamA}.jpg`}
                        alt="team A"
                        className="little-flag"
                    />{" "}
                    X{" "}
                    <img
                        src={`/images/flags/flag_${record.teamB}.jpg`}
                        alt="team B"
                        className="little-flag"
                    />
                </p>
            )},
    },
    {
        title: "Date",
        dataIndex: "date",
        key: "date",
        render: (text) => <p>{text}</p>,
    },

    {
        title: "Action",
        key: "action",
        render: (_, record) => (
            <Space size="middle">
                <p>Make a Bet</p>
            </Space>
        ),
    },
]


function AppTable() {
    return (
        <div>
            <Table columns={columns} dataSource={data} pagination={false}/>
        </div>
    )
}

export default AppTable
