export const menuHtml = `
<div class="wrapper">
    <div class="top">
      <img class="logo" src="../../../img/logo.png">
      <h1>Електронна система кадрового обліку ДСНС України</h1>
    </div>
    <div class="buttons-container">
        <button class="button-gradient">ШТАТНО-ПОСАДОВІ КНИГИ</button>
        <button class="button-gradient">ЗВІТИ</button>
        <button class="button-gradient" (click)="goTo('staff')">ПЕРСОНАЛЬНІ ДАНІ</button>
        <button class="button-gradient">ФОРМУВАННЯ МАТЕРІАЛІВ</button>
        <button class="button-gradient">АРХІВ</button>
    </div>
</div>
`;
