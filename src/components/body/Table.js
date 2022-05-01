import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import { MDBDataTable } from "mdbreact";
import toast from "react-hot-toast";


//Table Component
const Table = ({ table_name,val}) => {
  const [data, setData] = useState({
    columns: [],
    rows: [],
  });
  useEffect(() => {
    if (table_name)
      axios
        .get(`https://jsonplaceholder.typicode.com/${table_name}`)
        .then((res) => {
          if (res)
            setData({
              columns:
                Array.isArray(res.data) && res.data.length
                  ? Object.keys(res.data?.[0]).map((key) => ({
                      label: key.toUpperCase(),
                      field: key,
                    }))
                  : data.columns,
              rows: res.data,
            });
            toast.success("Query Processed");
        })
        .catch((err) => {
          setData({ columns: data.columns, rows: [] });
          toast.error("OOPS! Check Your Query :)")
        });
    else setData({ columns: data.columns, rows: [] });
  }, [table_name,val]);
  return (
    <div>
      {!data.rows.length ? "" : <MDBDataTable striped bordered data={data}/>}
    </div>
  );
};

export default Table;
