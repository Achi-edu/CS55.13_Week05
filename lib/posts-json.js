import fs from 'fs'; // filesystem module
import path from 'path'; // path helpers

const dataDir = path.join(process.cwd(), 'data'); // path to /data

export function getSortedPostsData() { // get posts for the home list
    const filePath = path.join(dataDir, 'posts.json'); // path to posts.json
    const jsonString = fs.readFileSync(filePath, 'utf8'); // read file as string
    const jsonObj = JSON.parse(jsonString); // parse JSON to array
    jsonObj.sort(function (a, b) { // sort by date
        return a.date.localeCompare(b.date); // earlier dates first
    }); // end sort
    return jsonObj.map(item => { // map to list fields
        return { // post summary object
            id: item.id.toString(), // id as string
            title: item.title, // title
            date: item.date, // date
            color: item.color // color class key
        } // end object
    }) // end map
} // end getSortedPostsData

export function getAllPostIds() { // get ids for getStaticPaths
    const filePath = path.join(dataDir, 'posts.json'); // path to posts.json
    const jsonString = fs.readFileSync(filePath, 'utf8'); // read file as string
    const jsonObj = JSON.parse(jsonString); // parse JSON to array
    return jsonObj.map(item => { // map each post to a path
        return { // path entry
            params: { // params for [id]
                id: item.id.toString() // id as string
            } // end params
        } // end path entry
    }); // end map
} // end getAllPostIds

export async function getPostData(id) { // get one post by id
    const filePath = path.join(dataDir, 'posts.json'); // path to posts.json
    const jsonString = fs.readFileSync(filePath, 'utf8'); // read file as string
    const jsonObj = JSON.parse(jsonString); // parse JSON to array
    const objReturned = jsonObj.filter(obj => { // find matching id
        return obj.id.toString() === id; // compare as strings
    }); // end filter
    if (objReturned.length === 0) { // no match
        return { // fallback post
            id: id, // requested id
            title: "Not found", // fallback title
            date: "", // empty date
            contentHtml: "Not Found", // fallback content
            color: "myBlack" // fallback color
        } // end fallback
    } else { // found a match
        return objReturned[0]; // return that post
    } // end if/else
} // end getPostData
