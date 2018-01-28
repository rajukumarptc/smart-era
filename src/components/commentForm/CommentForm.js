import React, {Component} from "react";
import style from "../../style";


class CommentForm extends Component{

    constructor(props){
        super(props);

        this.state = {author:"", text:""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.author + " said : " + this.state.text);
        let author = this.state.author.trim();
        let text = this.state.text.trim();
        if(!author || !text) return;
        this.props.onCommentSubmit({author: author, text: text});
        this.setState({author:"", text:""});


    }
    handleAuthorChange(e){
        this.setState({author:e.target.value});
    }

    handleTextChange(e){
        this.setState({text:e.target.value})
    }

    render(){
        return (
            <form style={style.commentForm} onSubmit={this.handleSubmit}>
                <input type="text"
                       placeholder="Your Name..."
                       style={style.commentFormAuthor}
                       value={this.state.author}
                       onChange={this.handleAuthorChange}/>

                <input type="text"
                       placeholder="Say Something..."
                       style={style.commentFormText}
                       value={this.state.text}
                       onChange={this.handleTextChange}/>

                <input type="submit" style={style.commentFormPost} value="Post"/>
            </form>
        )
    }
}


export default CommentForm;