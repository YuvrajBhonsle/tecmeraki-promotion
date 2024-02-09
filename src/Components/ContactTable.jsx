import React, { useEffect, useState } from "react";
import "../Components/ContactTable.css";
import getData from "../utils/getData";
function ContactTable() {
  const [data, setData] = useState();
  const fetchData = async () => {
    const fireBaseData = await getData();
    setData(fireBaseData);
  };
  console.log("aelooo ", data);
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(data, "sarkarr");
  console.log("aaala ");
  return (
    <div>
      <table id="customers">
        <thead
          style={{ display: "flex", flexGrow: 1, justifyContent: "start" }}
        >
          <th style={{ width: "100%" }}>Name</th>
          <th style={{ width: "100%" }}>email</th>
          <th style={{ width: "100%" }}>message</th>
        </thead>
        {data &&
          data.map((item) => {
            return (
              <>
                <tr
                  style={{
                    display: "flex",
                    flexGrow: 1,
                    justifyContent: "start",
                  }}
                >
                  <td style={{ width: "100%", maxWidth: "1/3vw" }}>
                    {item.name}
                  </td>
                  <td style={{ width: "100%", maxWidth: "1/3vw" }}>
                    {item.email}
                  </td>
                  <td style={{ width: "100%", maxWidth: "1/3vw" }}>
                    {item.message}
                  </td>
                </tr>
              </>
            );
          })}
      </table>
    </div>
  );
}

export default ContactTable;
