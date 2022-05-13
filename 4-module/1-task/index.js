function makeFriendsList(friends) {
  let ul = document.createElement('ul');
      for (elem in friends){
          let li = document.createElement('li');
          let a = document.createElement('a');
          $(a).appendTo(li);
          $(a).attr('href',friends[elem]);
          $(a).text(elem);
          $(li).appendTo(ul);
      }
  $(ul).appendTo('body');
  };
