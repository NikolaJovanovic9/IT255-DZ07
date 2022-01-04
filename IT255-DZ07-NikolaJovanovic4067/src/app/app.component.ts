import { Component, OnInit } from '@angular/core';
import { Room } from './modules/Room';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MetHotels';

  rooms: Room[];
  userPrice: string = "";

  constructor() {
    this.rooms = [
      new Room("12B", "Lente", 4, 125),
      new Room("37D", "Djidjeno", 2, 45),
      new Room("42F", "Mat", 3, 76),
      new Room("5A", "Lente", 4, 154),
    ];
  }

  ngOnInit(): void {

  }

  /*//Domaci broj 5
  addRoom(roomNumber: HTMLInputElement, naziv: HTMLInputElement, availablePpl: HTMLInputElement, price: HTMLInputElement): boolean {
    console.log(`Adding room, room number: ${roomNumber.value} and name: ${naziv.value}`);
    this.rooms.push(new Room(roomNumber.value, naziv.value, Number(availablePpl.value), Number(price.value)));
    roomNumber.value = '';
    naziv.value = '';
    availablePpl.value = '';
    price.value = '';
    return false;
  }
  */
  shuffle(array: Room[]): boolean {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return false;
  }

  public deleteRoom(room: Room) {
    this.rooms = this.rooms.filter(item => {
      return item.roomNumber !== room.roomNumber
    })
  }

  public updateRoom(room: Room) {
    let index = this.rooms.findIndex(i => i.roomNumber === room.roomNumber);
    this.rooms[index].name = "Promjena";
  }

  trackByFn(customParam: any, index: any, item: any) {
    return item[customParam];
  }

  public addRoom(room: Room) {
    this.rooms.push(room);
  }

  /*
    search() {
      if (this.userPrice != "") {
        this.rooms = this.rooms.filter(res => {
          console.log(res.price.toString());
          console.log("User: ", this.userPrice);
          return res.price.toString().toLocaleLowerCase().match(this.userPrice.toLocaleLowerCase());
        })
      } else {
        this.ngOnInit();
      }
    }
  */
}

