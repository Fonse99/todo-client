import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { GroupModel } from 'src/app/model/group.model';
import { ListModel } from 'src/app/model/list.model';
import { CategoryService } from 'src/app/services/category.service';
import { GroupService } from 'src/app/services/group.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'cmp-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() type: string | null = 'task';
  @Input() groups: GroupModel[] = [];
  @Input() list: ListModel[] = [];
  @Input() user: number | undefined = -1;

  fg = this.fb.group({
    titleName: new FormControl(''),
    description: new FormControl(''),
    dueDate: new FormControl(''),
    group: new FormControl(-1),
    list: new FormControl(-1),
  });

  constructor(
    private taskService: TaskService,
    private groupService: GroupService,
    private listService: CategoryService,

    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getAllGroups();
    this.getAllLists();
  }

  saveContent() {
    switch (this.type) {
      case 'list':
        this.listService.add({
          title: this.fg.get('titleName')?.value as string,
          description: this.fg.get('description')?.value as string,
        });
        break;

      case 'group':
        this.groupService.add({
          title: this.fg.get('titleName')?.value as string,
          description: this.fg.get('description')?.value as string,
        });
        break;

      default:
        const groupId = this.fg.get('group')?.value;
        const categoryId = this.fg.get('list')?.value;

        this.taskService.add({
          title: this.fg.get('titleName')?.value as string,
          description: this.fg.get('description')?.value as string,
          state: 'PENDING',
          beforeTo: new Date(),
          groupId: groupId ? groupId : -1,
          categoryId: categoryId ? categoryId : -1,
        });
        break;
    }
  }

  getAllGroups() {
    const userId = this.user ? this.user : -1;

    this.groupService
      .getAll(userId)
      .pipe((rawData) => {
        return rawData as Observable<GroupModel[]>;
      })
      .subscribe((data) => {
        this.groups = data;
      });
  }

  getAllLists() {
    const userId = this.user ? this.user : -1;

    this.listService
      .getAll(userId)
      .pipe((rawData) => rawData as Observable<ListModel[]>)
      .subscribe((data) => {
        this.list = data;
        console.log(this.list);
      });
  }
}
