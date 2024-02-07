import React, {useState} from 'react';
import {Form, Input, Select, Button, Drawer, } from 'antd';
import {useDispatch, useSelector} from "react-redux";

const Option = Select

const App = ({open, setOpen}) => {
    const {editData} = useSelector(state => state.xodimlarReducer)
    const {lavozim} = useSelector( state => state.lavozimReducer )
    const {daraja} = useSelector( state => state.darajaReducer )

    const dispatch = useDispatch()
    const [form] = Form.useForm()

    const onClose = () => {
        setOpen(false);
    };


    function onFinish (value) {
        if (editData.id){
            dispatch({type:"EDIT_SAVE", payload: value})
        }else {
            dispatch({type:"ADD_USER", payload: value })
        }
        setOpen(false)
        form.resetFields()
    }

    return (
        <>
            <Drawer title="Basic Drawer" onClose={onClose} open={open}>
                <Form form={form} onFinish={onFinish} layout={"vertical"}>
                    <Form.Item initialValue={editData.name} name={"name"} label={"Name"} rules={[{required:true}]} >
                        <Input />
                    </Form.Item>
                    <Form.Item initialValue={editData.lastname} name={"lastname"} label={"LastName"} rules={[{required:true}]} >
                        <Input />
                    </Form.Item>
                    <Form.Item initialValue={editData.phone} name={"phone"} label={"Phone"} rules={[{required:true}]} >
                        <Input />
                    </Form.Item>
                    <Form.Item initialValue={editData.position} name={"position"} label={"Position"} rules={[{required:true}]} >
                        <Select
                            placeholder="Position"
                            allowClear
                        >
                            {
                                lavozim.map(item=> <Option value={item.position}> {item.position} </Option> )
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item initialValue={editData.level} name={"level"} label={"Level"} rules={[{required:true}]} >
                        <Select
                            placeholder="Level"
                            allowClear
                        >
                            {
                                daraja.map(item=> <Option value={item.level}>{item.level}</Option> )
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item  >
                      <Button htmlType={"submit"} type={"primary"} className={"w-100"}> Save </Button>
                    </Form.Item>
                </Form>
            </Drawer>
        </>
    );
};
export default App;