import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Comment = ({ comment }) => {
    let [name, setName] = React.useState(comment.comment);
    let [comments, setComments] = React.useState([]);



    const getData = async () => {
        const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://cupcake-backend.herokuapp.com/cupcakeShop/v1/comments/`)
        comments = res.data;
        let reversedComments = comments.map(comment => comment).reverse();
        setComments(reversedComments);

    }


    useEffect(() => {
        getData();
    })


    const onUpdate = () => {

        let text = JSON.parse(`{"comment":"${name}"}`);
        console.log("hi", text);
        axios.put(`https://cors-anywhere.herokuapp.com/https://cupcake-backend.herokuapp.com/cupcakeShop/v1/comments/${comment.id}`, text)

    }

    const onDelete = () => {
        axios.delete(`https://cors-anywhere.herokuapp.com/https://cupcake-backend.herokuapp.com/cupcakeShop/v1/comments/${comment.id}`)
    }

    return (
        <div>
            <div className="form-group">
                <label className="text-white" htmlFor="comment">Comment:</label>
                <textarea className="form-control" rows="4" id="comment" value={name} onChange={e => {
                    setName(e.target.value)
                }}></textarea>
            </div>

            <div className="buttons">
                <button className="button text-black" id="create-button" onClick={onUpdate}>Update</button>
                <button className="button text-black" id="delete-button" onClick={onDelete}>Delete</button>
            </div>
            <br></br>

        </div>
    )
}
export default Comment;
