
export default function Modal(article, closeModalPopup){

    return (
            <div className="overlay">
                <div className='modal-container' key={article.id}>
                    <header>
                        <p>{article.tittle}</p>
                        <button onClick={closeModalPopup}><span className="material-symbols-outlined">close</span></button>
                    </header>
                    <p>{article.author} | <span>{article.date}</span></p>
                    <div className="content">
                        <p>{article.content}</p>
                    </div>
                    <div className="btns">
                        <button className="pub-btn">Publish</button>
                        <button className="del-btn">Delete</button>
                    </div>
                </div>
            </div>
    )
}