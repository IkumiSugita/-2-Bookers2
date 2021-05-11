$(function() {
  return $('#user_postcode').jpostal({
    postcode: ['#user_postcode'],
    address: {
      '#user_prefecture_code': '%3',
      '#user_adress_city': '%4',
      '#user_adress_street': '%5%6%7',
    },
  });
});