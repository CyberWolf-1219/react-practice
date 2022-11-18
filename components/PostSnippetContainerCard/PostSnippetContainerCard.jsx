import classes from "./PostSnippetContainerCard.module.css"
import { PostSnippetCard } from "./../"
import { useState, useEffect, useContext } from 'react'
import { DBContext } from './../../contexts/db-context/db-context'

function PostSnippetContainerCard({ location, strangerID = null }) {
    const [ posts, setPosts ] = useState([]);
    const dbContext = useContext(DBContext);

    useEffect(() => {
        if (window) {
            if (location == "feed") {
                (async () => {
                    const friendIdList = await dbContext.getFriendIdList();
                    sessionStorage.setItem("friendIDs", friendIdList)
                    const responesPosts = await dbContext.getFeed([ sessionStorage.userID, ...friendIdList ]);
                    setPosts(responesPosts)
                })();
            }
            else if (location == "user_profile") {
                (async () => {
                    const responesPosts = await dbContext.getPosts("user_profile", null);
                    setPosts(responesPosts)
                })();
            }
            else if (location == "stranger_profile") {
                (async () => {
                    const responesPosts = await dbContext.getPosts("stranger_profile", strangerID);
                    setPosts(responesPosts)
                })();
            }
        }
    }, [])

    return (
        <div className={`${classes.layout} card container`}>
            {
                posts.map((postObj) => {
                    return (
                        <PostSnippetCard
                            key={postObj.id}
                            postID={postObj.id}
                            author={postObj.author_name}
                            title={postObj.post_title}
                            content={postObj.post_content}
                            date={postObj.timestamp}

                        />
                    )
                }
                )
            }
        </div>
    )
}

export default PostSnippetContainerCard;