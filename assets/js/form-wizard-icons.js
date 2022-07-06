/**
 *  Form Wizard
 */

'use strict';

$(function () {
  const select2 = $('.select2'),
    selectPicker = $('.selectpicker');

  // Bootstrap select
  if (selectPicker.length) {
    selectPicker.selectpicker();
  }

  // select2
  if (select2.length) {
    select2.each(function () {
      var $this = $(this);
      $this.wrap('<div class="position-relative"></div>');
      $this.select2({
        placeholder: 'Select value',
        dropdownParent: $this.parent()
      });
    });
  }
});

(function () {
  // Icons Wizard
  // --------------------------------------------------------------------
  const wizardIcons = document.querySelector('.wizard-icons-example');

  if (typeof wizardIcons !== undefined && wizardIcons !== null) {
    const wizardIconsBtnNextList = [].slice.call(wizardIcons.querySelectorAll('.btn-next')),
      wizardIconsBtnPrevList = [].slice.call(wizardIcons.querySelectorAll('.btn-prev')),
      wizardIconsBtnSubmit = wizardIcons.querySelector('.btn-submit');

    const iconsStepper = new Stepper(wizardIcons, {
      linear: false
    });
    if (wizardIconsBtnNextList) {
      wizardIconsBtnNextList.forEach(wizardIconsBtnNext => {
        wizardIconsBtnNext.addEventListener('click', event => {
          iconsStepper.next();
        });
      });
    }
    if (wizardIconsBtnPrevList) {
      wizardIconsBtnPrevList.forEach(wizardIconsBtnPrev => {
        wizardIconsBtnPrev.addEventListener('click', event => {
          iconsStepper.previous();
        });
      });
    }
    if (wizardIconsBtnSubmit) {
      wizardIconsBtnSubmit.addEventListener('click', event => {
        alert('Submitted..!!');
      });
    }
  }

  // Vertical Icons Wizard
  // --------------------------------------------------------------------
  const wizardIconsVertical = document.querySelector('.wizard-vertical-icons-example');

  if (typeof wizardIconsVertical !== undefined && wizardIconsVertical !== null) {
    const wizardIconsVerticalBtnNextList = [].slice.call(wizardIconsVertical.querySelectorAll('.btn-next')),
      wizardIconsVerticalBtnPrevList = [].slice.call(wizardIconsVertical.querySelectorAll('.btn-prev')),
      wizardIconsVerticalBtnSubmit = wizardIconsVertical.querySelector('.btn-submit');

    const verticalIconsStepper = new Stepper(wizardIconsVertical, {
      linear: false
    });

    if (wizardIconsVerticalBtnNextList) {
      wizardIconsVerticalBtnNextList.forEach(wizardIconsVerticalBtnNext => {
        wizardIconsVerticalBtnNext.addEventListener('click', event => {
          verticalIconsStepper.next();
        });
      });
    }
    if (wizardIconsVerticalBtnPrevList) {
      wizardIconsVerticalBtnPrevList.forEach(wizardIconsVerticalBtnPrev => {
        wizardIconsVerticalBtnPrev.addEventListener('click', event => {
          verticalIconsStepper.previous();
        });
      });
    }
    if (wizardIconsVerticalBtnSubmit) {
      wizardIconsVerticalBtnSubmit.addEventListener('click', event => {
        alert('Submitted..!!');
      });
    }
  }

  // Icons Modern Wizard
  // --------------------------------------------------------------------
  const wizardIconsModern = document.querySelector('.wizard-modern-icons-example');

  if (typeof wizardIconsModern !== undefined && wizardIconsModern !== null) {
    const wizardIconsModernBtnNextList = [].slice.call(wizardIconsModern.querySelectorAll('.btn-next')),
      wizardIconsModernBtnPrevList = [].slice.call(wizardIconsModern.querySelectorAll('.btn-prev')),
      wizardIconsModernBtnSubmit = wizardIconsModern.querySelector('.btn-submit');

    const modernIconsStepper = new Stepper(wizardIconsModern, {
      linear: false
    });

    if (wizardIconsModernBtnNextList) {
      wizardIconsModernBtnNextList.forEach(wizardIconsModernBtnNext => {
        wizardIconsModernBtnNext.addEventListener('click', event => {
          modernIconsStepper.next();
        });
      });
    }
    if (wizardIconsModernBtnPrevList) {
      wizardIconsModernBtnPrevList.forEach(wizardIconsModernBtnPrev => {
        wizardIconsModernBtnPrev.addEventListener('click', event => {
          modernIconsStepper.previous();
        });
      });
    }
    if (wizardIconsModernBtnSubmit) {
      wizardIconsModernBtnSubmit.addEventListener('click', event => {
        alert('Submitted..!!');
      });
    }
  }

  // Icons Modern Wizard
  // --------------------------------------------------------------------
  const wizardIconsModernVertical = document.querySelector('.wizard-modern-vertical-icons-example');

  if (typeof wizardIconsModernVertical !== undefined && wizardIconsModernVertical !== null) {
    const wizardIconsModernVerticalBtnNextList = [].slice.call(wizardIconsModernVertical.querySelectorAll('.btn-next')),
      wizardIconsModernVerticalBtnPrevList = [].slice.call(wizardIconsModernVertical.querySelectorAll('.btn-prev')),
      wizardIconsModernVerticalBtnSubmit = wizardIconsModernVertical.querySelector('.btn-submit');

    const verticalModernIconsStepper = new Stepper(wizardIconsModernVertical, {
      linear: false
    });

    if (wizardIconsModernVerticalBtnNextList) {
      wizardIconsModernVerticalBtnNextList.forEach(wizardIconsModernVerticalBtnNext => {
        wizardIconsModernVerticalBtnNext.addEventListener('click', event => {
          verticalModernIconsStepper.next();
        });
      });
    }
    if (wizardIconsModernVerticalBtnPrevList) {
      wizardIconsModernVerticalBtnPrevList.forEach(wizardIconsModernVerticalBtnPrev => {
        wizardIconsModernVerticalBtnPrev.addEventListener('click', event => {
          verticalModernIconsStepper.previous();
        });
      });
    }
    if (wizardIconsModernVerticalBtnSubmit) {
      wizardIconsModernVerticalBtnSubmit.addEventListener('click', event => {
        alert('Submitted..!!');
      });
    }
  }
})();




// --------------------------------

$(document).ready(function () {
  // form repeater jquery
  $('.file-repeater, .contact-repeater, .repeater-default').repeater({
    show: function () {
      $(this).slideDown();
    },
    hide: function (deleteElement) {
      if (confirm('Are you sure you want to delete this element?')) {
        $(this).slideUp(deleteElement);
      }
    }
  });

});
//-----------------------------------------------------------------
// $('#myTable tbody').on('click', '.del-row', function () {
//   $(this).closest('tr').remove();
// })

// $(".add-row").click(function() {
//   $('#myTable tbody').append('<tr><td> <input type="text" name="name"  placeholder="ادخل نوع الترخيص #" class="form-control"></td>  <td> <input type="text" name="license type" placeholder="ادخل الجهه #" class="form-control"></td><td class="text-center"><a class="del-row" href="javascript:void(0);"><i class="fas fa-trash" style="font-size: 20px;"></i></a></td></tr>')
 
// });

  //--------------------------------الكود حق جدول تحليل المنافسين-----------------------------------------------
  // let i = 1;

  // function rowTemplate(i) {
  //   return `<tr data-index=${i} >
  //       <td>${i}</td>
  //       <td ><input type="text"  name="اسم المنافس-${i}" ></td>
  //       <td><input type="text" name="الخدمة/المنتج-${i}"></td>
  //       <td><input type="text" name="سعر البيع-${i}"></td>
  //       <td><input type="text" name="القيمةالمضافة-${i}"></td>
  //       <td><i class="fa fa-times-circle" style="font-size: 30px; color: red;" onclick="removeRow(${i})"></i></td>
  //     </tr>`
  // }
  
  // for (i = 1; i < 2; i ++) {
  //   $('tbody').append(rowTemplate(i));
  // }
  
  // function removeRow(i) {
  //   $("tbody").find(`tr[data-index='${i}']`).remove();
  // }
  
  // function addRow() {
  //   $('tbody').append(rowTemplate(i));
  //   i++;
  // }
  ////////////////////////////////////////////////////////////////////////////////////

//   $(function(){
//     $('#addMore').on('click', function() {
//               var data = $("#tb tr:eq(1)").clone(true).appendTo("#tb");
//               data.find("input").val('');
//      });
//      $(document).on('click', '.remove', function() {
//          var trIndex = $(this).closest("tr").index();
//             if(trIndex>1) {
//              $(this).closest("tr").remove();
//            } else {
//              alert("Sorry!! Can't remove first row!");
//            }
//       });
// });     

///////////////////////////////////////////////////////////////////

function deleteRow(id) 
{
	document.getElementById(id).remove() 
	} function addlicense()
	{ 
	var table = document.getElementById("LicenseType");
	// GET TOTAL NUMBER OF ROWS 
var y =table.rows.length; 
var id = "tbl"+y+1;
 
var row = table.insertRow(y); 
row.id=id;
 var cell1 = row.insertCell(0); 
 var cell2 = row.insertCell(1); 
 var cell3 = row.insertCell(2); 

 var cell4 = row.insertCell(3);
 cell1.outerHTML = `<th> ${y}</th>`; 
 cell2.innerHTML = ' <input type="text" name="license" class="form-control" />'; 
 cell3.innerHTML = ' <input type="text" name="hand" class="form-control" />'; 
cell4.innerHTML = '  <input type="button" class="btn btn-block btn-default" id="add-row" onclick="deleteRow(\''+id+'\')"  ><i class="bx bx-trash me-1"></i> </input> '; 
 }

//اول جدوال في الدراسة السوقيه تحليل المنافسين

function deleteRow(id) 
{
	document.getElementById(id).remove() 
	} function childrenRow()
	{ 
	var table = document.getElementById("childTable");
	// GET TOTAL NUMBER OF ROWS 
var x =table.rows.length; 
var id = "tbl"+x; 
var row = table.insertRow(x); 
row.id=id;
 var cell1 = row.insertCell(0); 
 var cell2 = row.insertCell(1); 
 var cell3 = row.insertCell(2); 
 var cell4 = row.insertCell(3);
 var cell5 = row.insertCell(4);
 var cell6 = row.insertCell(5);
 cell1.outerHTML = `<th> ${x}</th>`; 
 cell2.innerHTML = ' <input type="text" name="name" class="form-control" />'; 
 cell3.innerHTML = ' <input type="text" name="school" class="form-control" />'; 
 cell4.innerHTML = ' <input type="text" name="year" class="form-control" />'; 
 cell5.innerHTML = ' <input type="text" name="age" class="form-control" />'; 
 cell6.innerHTML = '  <button type="button" class="btn btn-danger" class=btn btn-primary" id="add-row" onclick="deleteRow(\''+id+'\')"> حذف</button> '; 
}
 
//  جدول الايرادات المتوقعة 
 
function deleteRow(id) 
{
	document.getElementById(id).remove() 
	} function Revenuerow()
	{ 
	var table = document.getElementById("Revenuerow");
	// GET TOTAL NUMBER OF ROWS 
var x =table.rows.length; 
var id = "tbl"+x+1;
var row = table.insertRow(x); 
row.id=id;
 var cell1 = row.insertCell(0); 
 var cell2 = row.insertCell(1); 
 var cell3 = row.insertCell(2); 
 var cell4 = row.insertCell(3);
 var cell5 = row.insertCell(4);
 var cell6 = row.insertCell(5);
 var cell7 = row.insertCell(6);

 cell1.outerHTML = `<th> ${x}</th>`; 
 cell2.innerHTML = ' <input type="text" name="name" class="form-control" />'; 
 cell3.innerHTML = ' <input type="number" name="product" class="form-control" min="0" max="1000" placeholder="#100#"/>'; 
 cell4.innerHTML = ' <input  type="number" name="quality" class="form-control"  min="0" max="1000" placeholder="#10288#" />'; 
 cell5.innerHTML = ' <input type="number" name="priceUnit" class="form-control"  min="0" max="1000" placeholder="#10288#" />';
 cell6.innerHTML = ' <input type="number" name="totalMoth" class="form-control"  min="0" max="1000" placeholder="#10288#"/>';  
 cell7.innerHTML = '  <button type="button" class="btn btn-danger" class=btn btn-primary" id="add-row" onclick="deleteRow(\''+id+'\')"> حذف</button> '; 
}
 
 //second  table في الدراسة السوقيه الخطة التسوقيه
 
 function deleteRow(id) 
{
	document.getElementById(id).remove() 
	} function childTable()
	{ 
	var table = document.getElementById("childrenRow");
	// GET TOTAL NUMBER OF ROWS 
var y =table.rows.length; 
var id = "tbl"+y+3;
 
var row = table.insertRow(y); 
row.id=id;
 var cell1 = row.insertCell(0); 
 var cell2 = row.insertCell(1); 
 var cell3 = row.insertCell(2); 

 var cell4 = row.insertCell(3);
 cell1.outerHTML = `<th> ${y}</th>`; 
 cell2.innerHTML = ' <input type="text" name="actives" class="form-control" />'; 
 cell3.innerHTML = ' <input type="number" name="mony" class="form-control" />'; 
cell4.innerHTML = '  <input type="button" class="btn btn-block btn-default" id="add-row" onclick="deleteRow(\''+id+'\')"  ><i class="bx bx-trash me-1"></i> </input> '; 
 }
 
 
 //الجدوال الثالث في الدراسة السوقيه اداة المخاطر
 
 function deleteRow(id) 
{
	document.getElementById(id).remove() 
	} function addTable()
	{ 
	var table = document.getElementById("riskmanage");
	// GET TOTAL NUMBER OF ROWS 
var y =table.rows.length; 
var id = "tbl"+y+4;
 
var row = table.insertRow(y); 
row.id=id;
 var cell1 = row.insertCell(0); 
 var cell2 = row.insertCell(1); 
 var cell3 = row.insertCell(2); 

 var cell4 = row.insertCell(3);
 cell1.outerHTML = `<th> ${y}</th>`; 
 cell2.innerHTML = ' <input type="text" name="dangertype" class="form-control" />'; 
 cell3.innerHTML = ' <input type="text" name="dangerExplain" class="form-control" />'; 
cell4.innerHTML = '  <input type="button" class="btn btn-block btn-default" id="add-row" onclick="deleteRow(\''+id+'\')"  ><i class="bx bx-trash me-1"></i> </input> '; 
 }
 
 
 function deleteRow(id) 
{
	document.getElementById(id).remove() 
	} function DangerStyle()
	{ 
	var table = document.getElementById("DangerStyle");
	// GET TOTAL NUMBER OF ROWS 
var y =table.rows.length; 
var id = "tbl"+y+5;
 
var row = table.insertRow(y); 
row.id=id;
 var cell1 = row.insertCell(0); 
 var cell2 = row.insertCell(1); 
 var cell3 = row.insertCell(2); 

 var cell4 = row.insertCell(3);
 cell1.outerHTML = `<th> ${y}</th>`; 
 cell2.innerHTML = ' <input type="text" name="dangertype" class="form-control" />'; 
 cell3.innerHTML = ' <input type="text" name="dangerExplain" class="form-control" />'; 
cell4.innerHTML = '  <input type="button" class="btn btn-block btn-default" id="add-row" onclick="deleteRow(\''+id+'\')"  ><i class="bx bx-trash me-1"></i> </input> '; 
 }
 
 //اول جدوال في الدراسة الفنية الاثاث والمعدات
 function deleteRow(id) 
{
	document.getElementById(id).remove() 
	} function mmm()
	{ 
	var table = document.getElementById("nnnn");
	// GET TOTAL NUMBER OF ROWS 
var x =table.rows.length; 
var id = "tbl"+x+5; 
var row = table.insertRow(x); 
row.id=id;
 var cell1 = row.insertCell(0); 
 var cell2 = row.insertCell(1); 
 var cell3 = row.insertCell(2); 
 var cell4 = row.insertCell(3);
 var cell5 = row.insertCell(4);
 var cell6 = row.insertCell(5);
 var cell7 = row.insertCell(6);
 cell1.outerHTML = `<th> ${x}</th>`; 
 cell2.innerHTML = ' <input type="text" name="name" class="form-control" />'; 
 cell3.innerHTML = ' <input type="text" name="school" class="form-control" />'; 
 cell4.innerHTML = ' <input type="text" name="year" class="form-control" />'; 
 cell5.innerHTML = ' <input type="text" name="age" class="form-control" />'; 
  cell6.innerHTML = ' <input type="text" name="age" class="form-control" />'; 
  cell7.innerHTML = '  <button type="button" class="btn btn-danger" class=btn btn-primary" id="add-row" onclick="deleteRow(\''+id+'\')"> حذف</button> '; 
}
 
 
 //جدوال القوة العامه للمشروع    
 function deleteRow(id) 
{
	document.getElementById(id).remove() 
	} function vvvv()
	{ 
	var table = document.getElementById("nnnnn");
	// GET TOTAL NUMBER OF ROWS 
var x =table.rows.length; 
var id = "tbl"+x+6; 
var row = table.insertRow(x); 
row.id=id;
 var cell1 = row.insertCell(0); 
 var cell2 = row.insertCell(1); 
 var cell3 = row.insertCell(2); 
 var cell4 = row.insertCell(3);
 var cell5 = row.insertCell(4);
 var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
 cell1.outerHTML = `<th> ${x}</th>`; 
 cell2.innerHTML = ' <input type="text" name="name" class="form-control" />'; 
 cell3.innerHTML = ' <input type="text" name="school" class="form-control" />'; 
 cell4.innerHTML = ' <input type="text" name="year" class="form-control" />'; 
 cell5.innerHTML = ' <input type="text" name="age" class="form-control" />';
 cell6.innerHTML = ' <input type="text" name="age" class="form-control" />'; 
 cell7.innerHTML = '  <button type="button" class="btn btn-danger" class=btn btn-primary" id="add-row" onclick="deleteRow(\''+id+'\')"> حذف</button> '; 
 }
 
 
  //جدوال الانشات والمباني    
 function deleteRow(id) 
{
	document.getElementById(id).remove() 
	} function mmmmm()
	{ 
	var table = document.getElementById("nnnnnn");
	// GET TOTAL NUMBER OF ROWS 
var x =table.rows.length; 
var id = "tbl"+x+7; 
var row = table.insertRow(x); 
row.id=id;
 var cell1 = row.insertCell(0); 
 var cell2 = row.insertCell(1); 
 var cell3 = row.insertCell(2); 
 var cell4 = row.insertCell(3);
 var cell5 = row.insertCell(4);
 var cell6 = row.insertCell(5);
 cell1.outerHTML = `<th> ${x}</th>`; 
 cell2.innerHTML = ' <input type="text" name="name" class="form-control" />'; 
 cell3.innerHTML = ' <input type="text" name="school" class="form-control" />'; 
 cell4.innerHTML = ' <input type="text" name="year" class="form-control" />'; 
 cell5.innerHTML = ' <input type="text" name="age" class="form-control" />';
 cell6.innerHTML = '  <button type="button" class="btn btn-danger" class=btn btn-primary" id="add-row" onclick="deleteRow(\''+id+'\')"> حذف</button> '; 
 }
 
 
 
  //جدوال الايجارات
 
 function deleteRow(id) 
{
	document.getElementById(id).remove() 
	} function rentals()
	{ 
	var table = document.getElementById("rentalsID");
	// GET TOTAL NUMBER OF ROWS 
var y =table.rows.length; 
var id = "tbl"+y+8;
 
var row = table.insertRow(y); 
row.id=id;
 var cell1 = row.insertCell(0); 
 var cell2 = row.insertCell(1); 
 var cell3 = row.insertCell(2); 

 var cell4 = row.insertCell(3);
 cell1.outerHTML = `<th> ${y}</th>`; 
 cell2.innerHTML = ' <input type="text" name="nam" class="form-control" />'; 
 cell3.innerHTML = ' <input type="text" name="schoo" class="form-control" />'; 
cell4.innerHTML = '  <input type="button" class="btn btn-block btn-default" id="add-row" onclick="deleteRow(\''+id+'\')"  ><i class="bx bx-trash me-1"></i> </input> '; 
 }
 
 
 
 //جدوال  الرسوم الحكومية والضرائب 
 
 function deleteRow(id) 
{
	document.getElementById(id).remove() 
	} function nnnnnnn()
	{ 
	var table = document.getElementById("mmmmmm");
	// GET TOTAL NUMBER OF ROWS 
var y =table.rows.length; 
var id = "tbl"+y+9;
 
var row = table.insertRow(y); 
row.id=id;
 var cell1 = row.insertCell(0); 
 var cell2 = row.insertCell(1); 
 var cell3 = row.insertCell(2); 

 var cell4 = row.insertCell(3);
 cell1.outerHTML = `<th> ${y}</th>`; 
 cell2.innerHTML = ' <input type="text" name="nam" class="form-control" />'; 
 cell3.innerHTML = ' <input type="text" name="schoo" class="form-control" />'; 
cell4.innerHTML = '  <input type="button" class="btn btn-block btn-default" id="add-row" onclick="deleteRow(\''+id+'\')"  ><i class="bx bx-trash me-1"></i> </input> '; 
 }
 
 
 //جدوال  الرسوم الحكومية والضرائب 
 
 function deleteRow(id) 
{
	document.getElementById(id).remove() 
	} function nnnnnnnn()
	{ 
	var table = document.getElementById("mmmmmmm");
	// GET TOTAL NUMBER OF ROWS 
var y =table.rows.length; 
var id = "tbl"+y+10;
 
var row = table.insertRow(y); 
row.id=id;
 var cell1 = row.insertCell(0); 
 var cell2 = row.insertCell(1); 
 var cell3 = row.insertCell(2); 

 var cell4 = row.insertCell(3);
 cell1.outerHTML = `<th> ${y}</th>`; 
 cell2.innerHTML = ' <input type="text" name="nam" class="form-control" />'; 
 cell3.innerHTML = ' <input type="text" name="schoo" class="form-control" />'; 
cell4.innerHTML = '  <input type="button" class="btn btn-block btn-default" id="add-row" onclick="deleteRow(\''+id+'\')"  ><i class="bx bx-trash me-1"></i> </input> '; 
 }
 
 
 
   //جدوال  المواد الخام 
 function deleteRow(id) 
{
	document.getElementById(id).remove() 
	} function mmmmmmmm()
	{ 
	var table = document.getElementById("nnnnnnnnnn");
	// GET TOTAL NUMBER OF ROWS 
var x =table.rows.length; 
var id = "tbl"+x+11; 
var row = table.insertRow(x); 
row.id=id;
 var cell1 = row.insertCell(0); 
 var cell2 = row.insertCell(1); 
 var cell3 = row.insertCell(2); 
 var cell4 = row.insertCell(3);
 var cell5 = row.insertCell(4);
 var cell6 = row.insertCell(5);
 var cell7 = row.insertCell(6);
 var cell8 = row.insertCell(7);
 cell1.outerHTML = `<th> ${x}</th>`; 
 cell2.innerHTML = ' <input type="text" name="name" class="form-control" />'; 
 cell3.innerHTML = ' <input type="text" name="school" class="form-control" />'; 
 cell4.innerHTML = ' <input type="text" name="year" class="form-control" />'; 
 cell5.innerHTML = ' <input type="text" name="age" class="form-control" />';
 cell6.innerHTML = ' <input type="text" name="age" class="form-control" />';
 cell7.innerHTML = ' <input type="text" name="age" class="form-control" />';
 cell8.innerHTML = '  <button type="button" class="btn btn-danger" class=btn btn-primary" id="add-row" onclick="deleteRow(\''+id+'\')"> حذف</button> '; 
 }
 
 //////////////////////////////////////////////////////////////////////////////////
 var isvalid=true;
$( document ).ready(function() {
    $("#test").prop("disabled",true);
    $(".tabbody input[type=number]").blur(function(){
        validateSubmit();
    });
});
function validateSubmit()
{
    var retval = sumRowVals();
    $("#test").prop("disabled",!retval);
    $("#msgdiv").html(retval ? "":"Invalid inputs!!!");
}
function sumRowVals()
{
    isvalid=true;
    resetFigs();
    var rindx=1;
    $(".tabbody tr").each(function(){
        var temp=0;
        var cindx=1;
        $("input[type=number]",this).each(function(){
            var elval = !isNaN($(this).val()) ? parseInt($(this).val()):0;
            var sumcol = $("#ccol"+cindx);
            $(sumcol).html(parseInt($(sumcol).html())+elval);
            temp=temp+elval;
            cindx++;
            if(elval > 100){isvalid=false;}
            if(parseInt($(sumcol).html()) > 100){isvalid=false;}
        });
        if(rindx != $('.tabbody tr').length)
        {
            if(temp != 100){isvalid=false;}
            $("#rcol"+rindx).html(temp);
        }
        rindx++;
    });
    return isvalid;
}
function resetFigs()
{
    $('*[id*=ccol]').each(function() {
    $(this).html("0");
});
}
function SubmitForm()
{
    // your form submit code
}