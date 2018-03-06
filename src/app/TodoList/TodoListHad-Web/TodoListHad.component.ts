import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../../magic/src/services/task.magics.service";

@Component({
	selector: "mga-TodoListHad",
	providers: [TaskMagicService],
	styleUrls: ["./TodoListHad.component.css"],
	templateUrl: "./TodoListHad.component.html"
})
export class TodoListHad extends BaseTaskMagicComponent {}
