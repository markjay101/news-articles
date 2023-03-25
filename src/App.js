import './App.css';
import RenderNewsArticles from './NewsArticles.js';
import NewsArticles from './news-articles.json';
import React, { useEffect, useState } from 'react';
import Modal from './Modal.js'


function App() {
  const [newsArticle, setNewsArticle] = useState([]);
  const [modalPopup, setModalPopup] = useState([]);
  const [popupClose, setPopupClose ]= useState(false);

  const popModal = (newsArticle) => {
    console.log("Read")
    setModalPopup([newsArticle]);
    setPopupClose(!popupClose)
  }

  useEffect(() =>{
      const getArticleData = () => {
          setNewsArticle(NewsArticles);
      }
      getArticleData();
  },[]);

  const handleChange = (e) => {
    const {name, checked} = e.target;
    if (name === "check-all"){
        const checkedArticle = newsArticle.map((article) => {return {...article, isChecked:checked}});
        console.log(checkedArticle);
        setNewsArticle(checkedArticle);
    } else {
        const checkedArticle = newsArticle.map((article) => article.author === name?{...article, isChecked:checked}:article);
        console.log(checkedArticle);
        setNewsArticle(checkedArticle);
    }
  }

  const handleDelete = () => {
    const updateArticle = newsArticle.filter((article) => article.isChecked !== true)
    setNewsArticle(updateArticle)
  }

  return (
    <div className="container">
        <h1>News Articles</h1>
        <header>
            <input className="checkbox" type="checkbox" name='check-all' checked={!newsArticle.some((article)=>article?.isChecked!==true)} onChange={handleChange}/>
            <button className="btn btn--publish">Publish</button>
            <button className="btn btn--delete" onClick={()=> {handleDelete()}}>Delete</button>
            <input type="text" name="" id="" placeholder="Search..."/>
        </header>
        <div className="news-articles">
            {RenderNewsArticles(newsArticle, handleChange, popModal)}
        </div>
        {popupClose &&
          modalPopup.map((modalContent) =>{
              return Modal(modalContent, popModal)
        })}
    </div> 
  );
}

export default App;
