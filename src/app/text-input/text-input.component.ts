import {Component, OnInit} from '@angular/core';
import {APIService} from "../API.service";
import QRCode from 'qrcode';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  text: string;
  roomId: string;
  session: string;
  qrcode: string;

  constructor(
    private apiService: APIService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
      this.route.params.subscribe(r => {
        this.roomId = r.id;
        this.session = Math.random().toString(36);

        QRCode.toDataURL(`${window.location.origin}/${this.roomId}`, { errorCorrectionLevel: 'L', scale: 8, color: {dark: "#334"}})
          .then(r => {
            this.qrcode = r;
          })
      })

      this.apiService.OnUpdateRoomListener
        .map((it: any) => it.value.data.onUpdateRoom)
        .filter((it: any) => {
          return it.id === this.roomId
        })
        .filter((it: any) => it.code !== this.session)
      .subscribe((it) => {
        this.text = it.text.trim();
      })
  }

  handleInput(){
    this.apiService.UpdateRoom({id: this.roomId, text: this.text || " ", code: this.session});
  }
}
