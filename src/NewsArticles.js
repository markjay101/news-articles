export default function FetchNewsArticles(newsArticles, handleChange, popModal){
    return newsArticles.map((newsArticle) => (
        <div className="card" key={newsArticle.id}>
            <div className="card-side-nav">
                <span className="material-symbols-outlined">drag_indicator</span>
                <input type="checkbox" name={newsArticle.author} checked={newsArticle?.isChecked || false} onChange={handleChange}/>
            </div>
            <div className="card-article">
                <div className="article-title">{newsArticle.tittle}</div>
                <div className="article-author-date">
                    <div className="article-author">
                        <span className="material-symbols-outlined">account_circle</span>
                        <span>{newsArticle.author}</span>
                    </div> 
                    <div className="article-date">
                        <span className="material-symbols-outlined">calendar_month</span>
                        <span>{newsArticle.date}</span>
                    </div> 
                </div>
                <div className="article-content">
                    <p>{newsArticle.content.slice(0, 75)}...</p>
                    <span className="material-symbols-outlined">visibility</span>
                    <button onClick={()=>popModal(newsArticle)}>Read Full</button>
                </div>
            </div>
            <div className="hashtags">
                <span>#Sports</span>
                <span>#Worldwide</span>
                <span>#Local</span>
            </div>
        </div>
    ))     
}

