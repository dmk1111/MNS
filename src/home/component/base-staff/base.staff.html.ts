//noinspection TsLint
export const baseStaffHtml = `



<div  class="wrapper-base">
        <form>
            <table>
                <tr>
                    <td><label>Посада - <input (change)="onChange('position', $event)"
                  [ngModelOptions]="{standalone: true}" 
                  [(ngModel)]="data.position" type="text" class="italic-text" value="Заступник директора Департаменту апарату ДСНС">
                        </label></td>
                </tr>
                <tr>
                    <td><label>ШПК - <input (change)="onChange('StatnoPosadovaCategoriya', $event)"
                    [ngModelOptions]="{standalone: true}" 
                    [(ngModel)]="data.StatnoPosadovaCategoriya" type="text" class="italic-text" value="полковник служби цивільного захисту">
                        </label></td>
                </tr>
                <tr>
                    <td><label>Дата та № призначення - <input (change)="onChange('dateNumberPurpose', $event)"
                    [ngModelOptions]="{standalone: true}"
                    [(ngModel)]="data.dateNumberPurpose" type="date" class="italic-text" value="19.01.2015"></label>
                        <label>№ <input  (change)="onChange('numberPurpose', $event)"
                    [ngModelOptions]="{standalone: true}"
                    [(ngModel)]="data.numberPurpose" type="number" value="10"></label>
                    </td>
                </tr>
                <tr>
                    <td><label>Чий наказ - <input type="text" class="italic-text"
                                                  value="начальника Головного управління"></label></td>
                </tr>
                <tr>
                    <td><label>Дата та № прийняття посади - <input type="date" class="italic-text" value="19.01.2015"></label>
                        <label>№ <input type="number" value="10"></label></td>
                </tr>
                <tr>
                    <td><label>Погодження ДСНС дата та № - <input type="date" class="italic-text" value="19.01.2015"></label>
                        <label>№ <input type="number" value="10"></label></td>
                </tr>
            </table>

            <table>
                <tr>
                    <td class="green"><label>Спеціальне звання - <input (change)="onChange('specialRank', $event)"
                [ngModelOptions]="{standalone: true}" 
                [(ngModel)]="data.specialRank" type="text" class="italic-text"
                                                                value="полковник служби цивільного захисту"></label></td>
                </tr>
                <tr>
                    <td class="green"><label>Дата та № присвоєння - <input (change)="onChange('dateConferringSpecRanks', $event)"
                    [ngModelOptions]="{standalone: true}"
                    [(ngModel)]="data.dateConferringSpecRanks" type="date" class="italic-text" value="19.01.2015"></label>
                        <label>№ <input (change)="onChange('numberConferringSpeclRanks', $event)"
                    [ngModelOptions]="{standalone: true}" 
                    [(ngModel)]="data.numberConferringSpeclRanks" type="number" value="10"></label></td>
                </tr>
                <tr>
                    <td class="green"><label>Чий наказ - <input type="text"
                                                class="italic-text" value="начальника Головного управління"></label></td>
                </tr>
            </table>

            <table>
                <tr>
                    <td><label>ПІБ - <input (change)="onChange('fullName', $event)"
                  [ngModelOptions]="{standalone: true}" 
                  [(ngModel)]="data.fullName" type="text" class="italic-text" value="Іванов Іван Іванович"></label></td>
                </tr>
                <tr>
                    <td><label>Освіта - <input (change)="onChange('study', $event)"
                  [ngModelOptions]="{standalone: true}"
                  [(ngModel)]="data.study" type="text" class="italic-text"
                                       value="Одеський інститут Сухопутних військ у 1976 році"></label></td>
                </tr>
                <tr>
                    <td><label>Контракт № <input  (change)="onChange('contractNumber', $event)"
                    [ngModelOptions]="{standalone: true}"
                    [(ngModel)]="data.contractNumber" type="text" value="20/2015"></label>
                        <label> з — <input (change)="onChange('contractFromDate', $event)"
                    [ngModelOptions]="{standalone: true}"
                    [(ngModel)]="data.contractFromDate" type="date" class="italic-text" value="20.01.2015"></label>
                        <label>по —  <input (change)="onChange('contractToDate', $event)"
                    [ngModelOptions]="{standalone: true}"
                    [(ngModel)]="data.contractToDate" type="date" class="italic-text" value="19.01.2020"></label></td>
                </tr>
            </table>

            <table>
                <tr>
                    <td><label>Дата останньої атестації — <input (change)="onChange('lastCertification', $event)"
                    [ngModelOptions]="{standalone: true}" 
                    [(ngModel)]="data.lastCertification" type="date" class="italic-text" value="20.01.2015"></label></td>
                </tr>
                <tr>
                    <td><label>Висновок атестації —
                        <input (change)="onChange('concludedCertification', $event)"
                    [ngModelOptions]="{standalone: true}" 
                    [(ngModel)]="data.concludedCertification" type="text" class="italic-text" value="Займаній посаді відповідає"></label></td>
                </tr>
                <tr>
                    <td><label>Кадровий резерв на посаду —
                        <input (change)="onChange('personnelProvisionForPost', $event)"
                    [ngModelOptions]="{standalone: true}"
                    [(ngModel)]="data.personnelProvisionForPost" type="text" class="italic-text" value="директор Департаменту з 2010 року"></label></td>
                </tr>
            </table>
        </form>
    </div>
    
    <div class="wrapper-2">         
        <table>
            <tr>
                <td class="green">Прийняття присяги державного службовця</td>
                <td class="green"><label><input (change)="onChange('dateSwear', $event)"
                    [ngModelOptions]="{standalone: true}" 
                    [(ngModel)]="data.dateSwear" type="date" value="20.05.2005"></label></td>
            </tr>
            <tr>
                <td class="green">Ранг державного службовця</td>
                <td class="green"><label><input (change)="onChange('rankCivilServant', $event)"
                    [ngModelOptions]="{standalone: true}" 
                    [(ngModel)]="data.rankCivilServant" type="number" ></label></td>
            </tr>
            <tr>
                <td class="green">Категорія державного службовця</td>
                <td class="green"><label><select  (change)="onChange('categoriesCivilServants', $event)"
                    [ngModelOptions]="{standalone: true}" 
                    [(ngModel)]="data.categoriesCivilServants">
                  <option value="A">A</option>   
                  <option value="B">B</option>   
                  <option value="C">C</option>   
                </select></label></td>
            </tr>
            <tr>
                <td class="green">Група оплати праці</td>
                <td class="green"><label><input  (change)="onChange('groupRemuneration', $event)"
                    [ngModelOptions]="{standalone: true}" 
                    [(ngModel)]="data.groupRemuneration" type="number" value="9"></label></td>
            </tr>
        </table>
    </div>

    <div class="right-info">
        <div>
            <p>Загальний стаж роботи з <br>
                <span class="italic-text">01.08.1991</span></p>
        </div>

        <div>
            <p>Стаж служби з <br>
                <span class="italic-text">01.08.1991</span></p>
        </div>

        <table>
            <tr>
                <td>Вік - <span class="italic-text">38 р. 11 м. 27 д</span></td>
            </tr>
            <tr>
                <td>Вислуга - <span class="italic-text">19 р. 11 м. 27 д.</span></td>
            </tr>
            <tr>
                <td>У званні - <span class="italic-text">03 р. 11 м. 27 д.</span></td>
            </tr>
            <tr>
                <td>У посаді - <span class="italic-text">05 р. 11 м. 27 д.</span></td>
            </tr>
        </table>
        
        <table style="width:290px">
          <tr>
            <td colspan="2">Звільнений зі служби цивільного захисту</td>
          </tr>
          <tr>
            <td style="width:50%">Дата та № наказу</td>
            <td>01.06.2016 № 10</td>
          </tr>
        </table>

    </div>
`;
