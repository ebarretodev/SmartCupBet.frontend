import React from "react"
import { Space, Table, Button } from "antd"
import { data } from "./constants"

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
                    {record.teamA === "TBD" ? (
                        <>{record.teamA}</>
                    ) : (
                        <img
                            src={`/images/flags/flag_${record.teamA}.jpg`}
                            alt="team B"
                            className="little-flag"
                        />
                    )}{" "}
                    X{" "}
                    {record.teamB === "TBD" ? (
                        <>{record.teamB}</>
                    ) : (
                        <img
                            src={`/images/flags/flag_${record.teamB}.jpg`}
                            alt="team B"
                            className="little-flag"
                        />
                    )}
                </p>
            )
        },
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
                <Button className="bt-login" >Make a Bet</Button>
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
