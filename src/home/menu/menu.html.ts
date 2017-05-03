export const menuHtml = `
<div class="wrapper">
    <h1>Електронна система кадрового обліку ДСНС України</h1>
    <div class="buttons-container">
        <button class="button-gradient"  style="cursor: pointer">ШТАТНО-ПОСАДОВІ КНИГИ</button>
        <button class="button-gradient" style="cursor: pointer">ЗВІТИ</button>
        <button class="button-gradient" style="cursor: pointer" (click)="goTo('staff')">ПЕРСОНАЛЬНІ ДАНІ</button>
        <button class="button-gradient" style="cursor: pointer">ФОРМУВАННЯ МАТЕРІАЛІВ</button>
        <button class="button-gradient" style="cursor: pointer">АРХІВ</button>
    </div>
</div>
`;
