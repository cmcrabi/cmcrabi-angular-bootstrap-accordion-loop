import { Component } from "@angular/core";
import { NgbAccordionConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-image-upload',
    templateUrl: './image-upload.component.html',
    styleUrls: ['./image-upload.component.css']
})

export class ImageUploadComponent{
    constructor(config: NgbAccordionConfig){
        config.closeOthers = true;
        config.type = 'info';
    }
    accordionItems = [
        {
            id: 1,
            title: 'Deepak',
            content: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
			officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
			moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim
			keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
			vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
			heard of them accusamus labore sustainable VHS`
        },
        {
            id: 2,
            title: 'Shriprada',
            content: `Vivamus eu mi eu risus euismod venenatis ac sit amet tellus. Nulla id lacus quis velit congue eleifend. 
            Phasellus rhoncus, urna ut vehicula posuere, metus arcu dignissim mi, sit amet fermentum urna elit vitae justo. 
            Aenean consectetur bibendum posuere. Ut lobortis massa vitae vulputate ultricies. Aliquam consequat aliquam turpis in feugiat. 
            Fusce vitae porttitor diam. Etiam consectetur tincidunt varius. Morbi vestibulum faucibus gravida.`
        },
        {
            id: 3,
            title: 'Sandeep',
            content: `Phasellus id pharetra sapien, vitae gravida massa. Duis non leo et diam laoreet bibendum. In quam arcu, 
            scelerisque ac lectus quis, consequat fermentum diam. Donec mollis blandit nibh a commodo. Aliquam quis urna condimentum, 
            egestas diam non, tristique enim. Morbi a ullamcorper tellus. Pellentesque id dapibus enim, aliquam efficitur arcu.`
        },
        {
            id: 4,
            title: 'Rabi',
            content: `Quisque non sapien lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            Phasellus at cursus leo, id posuere felis. Suspendisse eget ultricies turpis, sed consectetur nibh. 
            Mauris sem risus, ultrices id nibh eget, convallis dignissim orci. Nunc laoreet varius ante. In vitae eros et quam consectetur laoreet.`
        }
    ];
}