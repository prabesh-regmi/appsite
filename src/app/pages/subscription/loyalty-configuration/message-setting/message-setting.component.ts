import { Component, OnInit } from '@angular/core';
import {MessageData} from './messageData';


interface MessageData {
  id: string;
  type: string;
  message: string;
}
@Component({
  selector: 'app-message-setting',
  templateUrl: './message-setting.component.html',
  styleUrls: ['./message-setting.component.scss']
})
export class MessageSettingComponent implements OnInit {
  editMessage: { [key: string]: { edit: boolean; data: MessageData } } = {};
  messageData: MessageData[] = [];

  startEdit(id: string): void {
    this.editMessage[id].edit = true;
  }

  cancelEdit(id: string): void {
    const index = this.messageData.findIndex(item => item.id === id);
    this.editMessage[id] = {
      data: { ...this.messageData[index] },
      edit: false
    };
  }

  saveEdit(id: string): void {
    const index = this.messageData.findIndex(item => item.id === id);
    Object.assign(this.messageData[index], this.editMessage[id].data);
    this.editMessage[id].edit = false;
  }

  updateEditMessage(): void {
    this.messageData.forEach(item => {
      this.editMessage[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  ngOnInit(): void {
    this.messageData = MessageData;
    this.updateEditMessage();
  }
}