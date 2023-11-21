/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict'

var activeTab = "link-1-sub-1";
var activeBtn = "btn-1-sub-1";
var activeInfo = "btn-1-info";

document.getElementById(activeTab).classList.add('active-content');
document.getElementById(activeBtn).classList.add('active-btn');
document.getElementById(activeBtn).classList.add('active-btn-pw');

function handleTabBtn(self, info, target, isBtn) {
    if(target.toString().localeCompare(activeTab)) {
        // console.log("activeTab = " + activeTab);
        // console.log("activeBtn = " + activeBtn);
        // console.log("activeInfo = " + activeInfo);
        // console.log("-----");
        // console.log("target = " + target);
        // console.log("self = " + self);
        // console.log("info = " + info);
        
        document.getElementById(activeBtn).classList.remove('active-btn');
        document.getElementById(self).classList.add('active-btn');

        if(info.localeCompare(activeInfo)) {
            document.getElementById(activeInfo).classList.remove('active-info');
            activeInfo = info;
            document.getElementById(activeInfo).classList.add('active-info');
        }

        if(isBtn) {
            const alist = document.getElementById('tab').getElementsByClassName('accordion-button');
            for (let i = 0; i < alist.length; i++) {
                if(!alist.item(i).classList.contains('collapsed')) {
                    alist.item(i).click();
                }
            }
        } else {
            document.getElementById(self).classList.add('active-btn-pw');
        }
        
        document.getElementById(activeBtn).classList.remove('active-btn-pw');
        document.getElementById(activeTab).classList.remove('active-content');
        activeTab = target.toString();
        activeBtn = self;
        document.getElementById(target).classList.add('active-content');


        // console.log("-----");

        // console.log("activeTab = " + activeTab);
        // console.log("activeBtn = " + activeBtn);
        // console.log("activeInfo = " + activeInfo);

        // console.log("==============");
    }
}
