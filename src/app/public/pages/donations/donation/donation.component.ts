import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-donation",
  templateUrl: "./donation.component.html",
  styleUrls: ["./donation.component.scss"],
})
export class DonationComponent {
  amounts: any[] = [
    {
      amount: 1,
      text: "Una merienda para 1 niño",
      url: "https://mpago.la/2jH41Cw",
    },
    {
      amount: 5,
      text: "Útiles escolares para 1 niño",
      url: "https://mpago.la/2hsvFr7",
    },
    {
      amount: 10,
      text: "10 meriendas para un niño",
      url: "https://mpago.la/1ghaQRo",
    },
    {
      amount: 1000,
      text: "Una beca para 2 niños",
      url: "https://mpago.la/1YsZj6T",
    },
    {
      amount: 5000,
      text: "Una beca para 10 niños",
      url: "https://mpago.la/1KLurCp",
    },
  ];
  selected: number = 0;
  msj: string =
    "Tu donación ayuda a que los niños y niñas logren sus sueños";

  constructor(private router: Router) {}

  changeSelected(index: number) {
    this.selected = index;
  }

  donate(e: Event) {
    e.preventDefault();
    this.router.navigate(["/gracias"]);
    window.open(this.amounts[this.selected].url);
  }
}
