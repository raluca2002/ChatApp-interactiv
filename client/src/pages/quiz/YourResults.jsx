import React, { useEffect, useState } from "react";
import "./style/App.css";
import { getServerData } from "../../helper/helper";
import { baseUrl } from "../../utils/services";

const YourResults = () => {
    const [userResults, setUserResults] = useState([]);

    useEffect(() => {
        getServerData(`${baseUrl}/results`, (res) => {
            // Grupăm rezultatele după utilizatori
            const userGroups = {};
            res.forEach((result) => {
                if (!userGroups[result.username]) {
                    userGroups[result.username] = [];
                }
                userGroups[result.username].push(result);
            });

            // Calculăm cel mai mare punctaj al fiecărui utilizator
            const maxScores = Object.values(userGroups).map((results) =>
                results.reduce((maxScore, result) => Math.max(maxScore, result.points), -Infinity)
            );

            // Creăm o listă de obiecte pentru fiecare utilizator și cel mai mare punctaj al acestuia
            const usersWithMaxScores = Object.keys(userGroups).map((username, index) => ({
                username,
                maxScore: maxScores[index]
            }));

            // Sortăm utilizatorii în ordine descrescătoare a punctajului maxim
            usersWithMaxScores.sort((a, b) => b.maxScore - a.maxScore);

            // Actualizăm starea componentei cu rezultatele
            setUserResults(usersWithMaxScores);
        });
    }, []);

    return (
        <div>
            <table>
                <thead className="table-header">
                    <tr className="table-row">
                        <td>Name</td>
                        <td>Max Score</td>
                    </tr>
                </thead>
                <tbody>
                    {userResults.length > 0 ? (
                        userResults.map((user, index) => (
                            <tr key={index} className="table-body">
                                <td>{user.username}</td>
                                <td>{user.maxScore}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2">No Data Found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default YourResults;
