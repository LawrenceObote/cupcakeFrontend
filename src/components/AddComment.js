import React, { Component } from 'react';
import axios from 'axios';
import Comment from './Comment'



class AddComment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            newComment: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://cupcake-backend.herokuapp.com/cupcakeShop/v1/comments/`)
        let comments = res.data;
        let reversedComments = comments.map(comment => comment).reverse();
        this.setState({ comments: reversedComments });
        console.log(reversedComments);
        console.log(this.state.comments);

    }

    handleChange = (e) => {
        this.setState({ newComment: e.target.value });
        console.log(this.state.newComment)
    }

    render() {

        const onCreate = () => {
            axios({
                method: 'post',
                url: 'https://cors-anywhere.herokuapp.com/https://cupcake-backend.herokuapp.com/cupcakeShop/v1/comments',
                data: {
                    comment: this.state.newComment
                }
            })
        }



        return (
            <div>
                <textarea id="new-comment-box" type="text" onChange={(e) => this.setState({ newComment: e.target.value })} value={this.state.newComment} name={"newComment"} placeholder={"Leave a comment"} />
                <button className="button text-white" id="create-button" onClick={onCreate}>Create</button>
                {this.state.comments.map(comment => (
                    <li id="list-comment" key={this.state.comments.id}>
                        <Comment className="comment" comment={comment}></Comment>
                    </li>
                ))}
            </div>
        )
    }
}

export default AddComment;
