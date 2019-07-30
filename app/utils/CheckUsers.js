export default (users) => {

    let check = true;
    users.forEach(user => {
        if(user.username === '' || user.character === '')
            check = false; 
    });

    return check;
}