import React, { useEffect, useState } from "react";
import "./style/App.css"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { getServerData } from "../../helper/helper";
import { baseUrl } from "../../utils/services";

const ResultTable = () => {
    const { user, logoutUser } = useContext(AuthContext);
    const [data, setData] = useState([])
    
    useEffect(() => {
        getServerData(`${baseUrl}/results`,(res)=> {
            // Sortăm datele în ordine descrescătoare după punctaj
            res.sort((a, b) => b.points - a.points);
            setData(res);
        });
    }, []);

    return(
        <div>
            <table>
                <thead className='table-header'>
                    <tr className='table-row'>
                        <td>Name</td>
                        <td>Attempts</td>
                        <td>Earn Points</td>
                        <td>Result</td>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? <tr><td colSpan="4">No Data Found</td></tr> :
                        <tr className='table-body'>
                            <td>{data[0]?.username || ''}</td>
                            <td>{data[0]?.attempts || 0}</td>
                            <td>{data[0]?.points || 0}</td>
                            <td>{data[0]?.achived || ""}</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ResultTable;
