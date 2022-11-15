import React, { useState } from "react"
import { Space, Table, Button } from "antd"
import { data } from "./constants"
import FormBet from "./FormBet"




function AppTable() {
    
	const [visible, setVisible] = useState(false)
	const [record, setRecord] = useState({})

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
                    <Button className="bt-login" onClick={() => {
                        setVisible(true)
                        setRecord(record)
                    }}>
                        Make a Bet
                    </Button>
                </Space>
            ),
        },
    ]

    return (
        <div>
            <FormBet visible={visible} setVisible={setVisible} record={record}/>
            <Table columns={columns} dataSource={data} pagination={false} />
        </div>
    )
}

export default AppTable
