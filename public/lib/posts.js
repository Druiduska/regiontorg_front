async function posts_all(s_url){
    rspns = await fetch(s_url +'/api/posts/all', { method: 'POST', });
    let rslt = await rspns.json();
    return rslt;
}