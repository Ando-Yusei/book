// Booklist.jsx
import React , { useState, useEffect }from "react";

const Booklist = (props) => {
  const [bookData, setBookData] = useState(null); // ここから追加
  useEffect(() => {
    const result = props
      .getData?.(props.language)
      .then((response) => setBookData(response));
  }, [props]); // ここまで追加
  return (
    <div>
       <ul>
        {
          bookData === null ? (
             <p>now loading...</p>
          ) : (
            bookData.data.items.map((x, index) => (
              <li key={index}>
                <h1>{x.volumeInfo.title}</h1>
                <p><img src = {x.volumeInfo.imageLinks ? x.volumeInfo.imageLinks.smallThumbnail:""}></img></p>
                <p>{x.volumeInfo.authors}</p>
                <p>{x.volumeInfo.description}</p>
                <a href = {x.volumeInfo.canonicalVolumeLink}>{x.volumeInfo.canonicalVolumeLink}</a>
                
                
                
                
                
                
                
                
                </li>
            ))
            
          )
        }
      </ul>
    </div>
  );
};
export default Booklist;
