import { DatePicker, Space, message } from "antd";
import React, { useState } from "react";
import "../../../node_modules/antd/dist/antd.css";

function DatePickerA() {
  const [date, setDate] = useState(null);
  const handleChange = (value) => {
    message.info(
      `Selected Date: ${value ? value.format("YYYY-MM-DD") : "None"}`
    );
    setDate(value);
  };

  return (
    <>
      <Space direction="vertical">
        <DatePicker onChange={handleChange} />
      </Space>
      <div style={{ marginTop: 16 }}>
        Selected Date: {date ? date.format("YYYY-MM-DD") : "None"}
      </div>
    </>
  );
}

export default DatePickerA;
