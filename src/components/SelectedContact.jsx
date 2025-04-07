

function SelectedContact ({selectedContactId, setSelectedContactId}) {
    return(
        <>
            <h3>{selectedContactId.name}</h3>
            <p>{selectedContactId.email}</p>
            <p>{selectedContactId.phone}</p>
            <button onClick={()=>setSelectedContactId(null)}>Back to Contact List</button>
        </>
    )
}

export default SelectedContact