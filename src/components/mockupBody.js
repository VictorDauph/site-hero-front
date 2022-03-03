function MockupBody(){
    return(
        <main className="container my-2">
            <table className="tableMail shadow">
                {/* Table header*/}
                <thead >
                    <tr>
                        <th>Expediteur</th>
                        <th>Objet</th>
                        <th>date</th>
                    </tr>
                </thead>
                {/* Table body*/}
                <tbody>
                    <tr >
                        <td>Mark</td>
                        <td>coucou</td>
                        <td>01/01/01</td>
                    </tr>
                    <tr >
                        <td>Jacob</td>
                        <td>ceci n'est pas un virus</td>
                        <td>01/01/01</td>
                    </tr>
                    <tr>
                        <td >Larry the Bird</td>
                        <td >Ta daronne est hot!</td>
                        <td>01/01/01</td>
                    </tr>
                </tbody>
            </table>
        </main>
    )
}

export default MockupBody