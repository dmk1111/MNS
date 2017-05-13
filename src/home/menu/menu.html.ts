//noinspection TsLint
export const menuHtml = `
<div class="wrapper">
    <div class="top">
      <img class="logo" src="../../../img/logo.png">
      <h1>Електронна система кадрового обліку ДСНС України</h1>
    </div>
    <div class="buttons-container">
        <button class="button-gradient" (click)="goTo('position-book')">ШТАТНО-ПОСАДОВІ КНИГИ</button>
        <button class="button-gradient" [disabled]="true">ЗВІТИ</button>
        <button class="button-gradient" (click)="goTo('staff')" >ПЕРСОНАЛЬНІ ДАНІ</button>
        <button class="button-gradient" [disabled]="true">ФОРМУВАННЯ МАТЕРІАЛІВ</button>
        <button class="button-gradient" [disabled]="true">АРХІВ</button>
        <button class="button-gradient" *ngIf="isAdmin" (click)="goTo('admin')">АДМІНКА</button>
    </div>
</div>
`;
