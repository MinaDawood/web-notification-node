self.addEventListener('push', e => {
  const data = e.data.json();
  console.log(data);
  self.registration.showNotification(data.title, {
    body: 'Notified by Mina Daoud',
    icon: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvecta.io%2Fsymbols%2F82%2Fbrands-go-gz%2F45%2Fgoogle-icon&psig=AOvVaw19OGFV1XYwQBz63Wa_OljJ&ust=1628233250641000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDEptenmfICFQAAAAAdAAAAABAD',
  });
});
