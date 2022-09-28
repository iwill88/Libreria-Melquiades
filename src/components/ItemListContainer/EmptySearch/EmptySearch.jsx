import './EmptySearch.css'
 
export const EmptySearch = () => {
    return (
        <div className="emptyContainer">
            <div className="empty">
                <img src="../assets/warning-icon.png" alt="warning" />
                <p>La búsqueda no ha devuelto ningún resultado!</p> 
            </div>
            
        </div>
    );
}

