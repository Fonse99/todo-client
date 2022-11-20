import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupModel } from 'src/app/model/group.model';
import { CategoryService } from 'src/app/services/category.service';
import { GroupService } from 'src/app/services/group.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'cmp-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  list = [
    { title: 'Tareas de programación' },
    { title: 'Tareas de Bases de datos' },
  ];

  groups: GroupModel[] = [];

  @Input() classes = 'sidebar display-main';

  constructor(
    private groupService: GroupService,
    private listService: CategoryService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getAllGroups();
  }

  getAllGroups() {
    this.userService.sesion$.subscribe((currentUser) => {
      const userId = currentUser.Id ? currentUser.Id : -1;

      this.groupService
        .getAll(userId)
        .pipe((rawData) => {
          return rawData as Observable<GroupModel[]>;
        })
        .subscribe((data) => {
          this.groups = data;
        });
    });
  }

  getAllLists() {}
}
