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
 function calculateTotals()
 {
  var price=document.getElementById("priceUnit").value;
  var quality=document.getElementById("quality").value;

 }
function deleteRow(id) 
{
	document.getElementById(id).remove() 
	}
function Revenuerow()
	{ 
	var table = document.getElementById("Revenuerow");
 
  var table1 = document.getElementById("Revenuerow").getElementsByTagName("tbody")[0];
  var rows=table1.getElementsByTagName("tr");
  var i;
  var ii;
  var PriceQuality=0;
  var price,Quality;
  var total=0;
  var totalBox=document.getElementById("totalall");

  for (i=0;i<rows.length;i++)
  {

    for(ii=0;ii<=rows[i].getElementsByTagName("td").length;ii++)
    {
    Quality=(rows[i].getElementsByTagName("td")[1].getElementsByTagName("input")[0].value);
    price=(rows[i].getElementsByTagName("td")[2].getElementsByTagName("input")[0].value);

    PriceQuality=Quality*price;
    console.log(rows[i].getElementsByTagName("td")[2].getElementsByTagName("input")[0].value);
    rows[i].getElementsByTagName("td")[3].getElementsByTagName("input")[0].value=PriceQuality;
    rows[i].getElementsByTagName("td")[4].getElementsByTagName("input")[0].value=PriceQuality*12;

    
  }
  total=total+Number(rows[i].getElementsByTagName("td")[4].getElementsByTagName("input")[0].value);
    totalBox.value=total;
}
  

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
 cell2.innerHTML = '<input type="text" name="name" class="form-control" placeholder="اسم الصنف"/>  '; 
 cell3.innerHTML = ' <input type="number" name="quality" class="form-control" min="0" max="1000" placeholder="#100#"/>'; 
 cell4.innerHTML = ' <input  type="number" name="priceUnit" class="form-control"  min="0" max="1000" placeholder="#10288#" />'; 
 cell5.innerHTML = ' <input disabled type="number" name="totalMoth" class="form-control"  min="0" max="1000" placeholder="0000" />';
 cell6.innerHTML = ' <input disabled type="number" name="totalyear" class="form-control"  min="0" max="1000" placeholder="#10288#"/>';  
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
  function calculateTotal()
 {
  
  
  var table1 = document.getElementById("Furniture").getElementsByTagName("tbody")[0];
  var rows=table1.getElementsByTagName("tr");
  var i;
  var ii;
  var PricesAmount=0;
  var prices,Amount;
  var total=0;
  var TotalPrices=0;
  var Totalamount=0;
  var totalBox=document.getElementById("totalas");

  for (i=0;i<rows.length;i++)
  {

    for(ii=0;ii<=rows[i].getElementsByTagName("td").length;ii++)
    {
    Amount=(rows[i].getElementsByTagName("td")[2].getElementsByTagName("input")[0].value);
    prices=(rows[i].getElementsByTagName("td")[3].getElementsByTagName("input")[0].value);

    PricesAmount=Amount*prices;

    rows[i].getElementsByTagName("td")[4].getElementsByTagName("input")[0].value=PricesAmount;
    
  }
  TotalPrices=TotalPrices+Number(prices);
  Totalamount=Totalamount+Number(Amount);
  document.getElementById("prices").value=TotalPrices;
  document.getElementById("amount").value=Totalamount;
  total=total+Number(rows[i].getElementsByTagName("td")[4].getElementsByTagName("input")[0].value);
    totalBox.value=total;
}

 }

 function deleteRow(id) 
{
	document.getElementById(id).remove() 
	} 
function Furniture()
	{ 
    var table = document.getElementById("Furniture");
    calculateTotal();

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
 cell2.innerHTML = '<input type="text" name="item" class="form-control"  placeholder=" البنـــــــد"/>  '; 
 cell3.innerHTML = '<input type="text" name="supplier" class="form-control" placeholder="اسم المورد"/>  '; 
 cell4.innerHTML = '<input type="number" name="total" class="form-control" placeholder="00" onkeyup=\'calculateTotal();\'/> '; 
 cell5.innerHTML = '<input type="number" name="price" class="form-control" placeholder="0000"/ onkeyup=\'calculateTotal();\'> '; 
  cell6.innerHTML = '<input disabled type="number" name="totals" class="form-control" placeholder="0000000"/>  '; 
  cell7.innerHTML = '  <button type="button" class="btn btn-danger" class=btn btn-primary" id="add-row" onclick="deleteRow(\''+id+'\')"> حذف</button> '; 
}
 
 
 //جدوال القوى العاملة للمشروع    
 function calculateTotals()
 {
  var price=document.getElementById("monys").value;
  var quality=document.getElementById("Nemployee").value;

 }

 function deleteRow(id) 
{
	document.getElementById(id).remove() 
	} function staffs()
	{ 
  var table = document.getElementById("staffs");
  
  
  var table1 = document.getElementById("staffs").getElementsByTagName("tbody")[0];
  var rows=table1.getElementsByTagName("tr");
  var i;
  var ii;
  var monysNemployee=0;
  var monys,Nemployee;
  var total=0;
  var totalBox=document.getElementById("totalsyears");

  for (i=0;i<rows.length;i++)
  {

    for(ii=0;ii<=rows[i].getElementsByTagName("td").length;ii++)
    {
      Nemployee=(rows[i].getElementsByTagName("td")[1].getElementsByTagName("input")[0].value);
      monys=(rows[i].getElementsByTagName("td")[2].getElementsByTagName("input")[0].value);

      monysNemployee=Nemployee*monys;
    console.log(rows[i].getElementsByTagName("td")[2].getElementsByTagName("input")[0].value);
    rows[i].getElementsByTagName("td")[3].getElementsByTagName("input")[0].value=monysNemployee;
    rows[i].getElementsByTagName("td")[4].getElementsByTagName("input")[0].value=monysNemployee*12;

    
  }
  total=total+Number(rows[i].getElementsByTagName("td")[4].getElementsByTagName("input")[0].value);
    totalBox.value=total;
}
 
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
 cell2.innerHTML = '<input type="text" name="occupation" class="form-control" placeholder="اسم الوظيفة "/>  '; 
 cell3.innerHTML = '<input type="number" name="mony" class="form-control" placeholder="0000"/> '; 
 cell4.innerHTML = '<input type="number" name="total" class="form-control" placeholder="0"/>  ';
 cell5.innerHTML = '<input disabled type="number" name="totalMony" class="form-control" placeholder="0000"/>  '; 
 cell6.innerHTML = '<input disabled type="number" name="totalMony" class="form-control" placeholder="0000000"/>  '; 
 cell7.innerHTML = '  <button type="button" class="btn btn-danger" class=btn btn-primary" id="add-row" onclick="deleteRow(\''+id+'\')"> حذف</button> '; 
 }
 
 
  //جدوال الانشات والمباني 
  function calculateTotals()
 {
  var amount=document.getElementById("Mater").value;
  var prices=document.getElementById("Area").value;

 }
  
 function deleteRow(id) 
{
	document.getElementById(id).remove() 
	} function Buildings()
	{ 
  var table = document.getElementById("Buildings");
  
  
  var table1 = document.getElementById("Buildings").getElementsByTagName("tbody")[0];
  var rows=table1.getElementsByTagName("tr");
  var i;
  var ii;
  var MaterArea=0;
  var mater,Area;
  var total=0;
  var totalBox=document.getElementById("Totalsa");

  for (i=0;i<rows.length;i++)
  {

    for(ii=0;ii<=rows[i].getElementsByTagName("td").length;ii++)
    {
      mater=(rows[i].getElementsByTagName("td")[1].getElementsByTagName("input")[0].value);
      Area=(rows[i].getElementsByTagName("td")[2].getElementsByTagName("input")[0].value);

      MaterArea=mater*Area;
    console.log(rows[i].getElementsByTagName("td")[3].getElementsByTagName("input")[0].value);
    rows[i].getElementsByTagName("td")[3].getElementsByTagName("input")[0].value=MaterArea;
    
  }
  total=total+Number(rows[i].getElementsByTagName("td")[3].getElementsByTagName("input")[0].value);
    totalBox.value=total;
}
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
 cell2.innerHTML = '<input type="text" name="Builid" class="form-control" placeholder="نوع البناء  "/>'; 
 cell3.innerHTML = '<input type="number" name="Mater" class="form-control" placeholder="000"/>'; 
 cell4.innerHTML = '<input type="number" name="Area" class="form-control" placeholder="000"/>'; 
 cell5.innerHTML = '<input disabled type="number" name="Totalsa" class="form-control" placeholder="000"/> ';
 cell6.innerHTML = '  <button type="button" class="btn btn-danger" class=btn btn-primary" id="add-row" onclick="deleteRow(\''+id+'\')"> حذف</button> '; 
 }
 
 
 
  //جدوال الايجارات
  

 function deleteRow(id) 
{
	document.getElementById(id).remove() 
	} function rentals()
	{ 
  var table = document.getElementById("rentals");
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
 cell2.innerHTML = '<input type="text" name="varieties" class="form-control" placeholder=" الاصناف والمعدات"/> '; 
 cell3.innerHTML = '<input type="number" name="rentAnnually" class="form-control" placeholder="000"/> '; 
 cell4.innerHTML = '  <button type="button" class="btn btn-danger" class=btn btn-primary" id="add-row" onclick="deleteRow(\''+id+'\')"> حذف</button> '; 
 }
 
 
 
 //جدوال  الرسوم الحكومية والضرائب 
 
 function deleteRow(id) 
{
	document.getElementById(id).remove() 
	} function Taxes()
	{ 
	var table = document.getElementById("Taxes");
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
 cell2.innerHTML = '<input type="text" name="fees" class="form-control" placeholder="الرسوم الحكومية "/>  '; 
 cell3.innerHTML = '<input type="number" name="AnnualFee" class="form-control" placeholder="0000"/> '; 
 cell4.innerHTML = '  <button type="button" class="btn btn-danger" class=btn btn-primary" id="add-row" onclick="deleteRow(\''+id+'\')"> حذف</button> '; 
 }
 
 
 //جدول  مصاريف التاسيس  
 
 function deleteRow(id) 
{
	document.getElementById(id).remove() 
	} function FoundationExpenses()
	{ 
	var table = document.getElementById("FoundationExpenses");
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
 cell2.innerHTML = '<input type="text" name="Foundation" class="form-control" placeholder="مصاريف التأسيس "/>  '; 
 cell3.innerHTML = '<input type="number" name="price" class="form-control" placeholder="0000"/> '; 
 cell4.innerHTML = '  <button type="button" class="btn btn-danger" class=btn btn-primary" id="add-row" onclick="deleteRow(\''+id+'\')"> حذف</button> '; 
 }
 
 
 
   //جدوال  المواد الخام 
   function calculateTotals()
 {
  var Uint=document.getElementById("Uint").value;
  var qualitReqiredMonthly=document.getElementById("qualitReqiredMonthly").value;

 }

 function deleteRow(id) 
{
	document.getElementById(id).remove() 
	} function Materials()
	{ 
  var table = document.getElementById("Materials");
  
  
  
  var table1 = document.getElementById("Materials").getElementsByTagName("tbody")[0];
  var rows=table1.getElementsByTagName("tr");
  var i;
  var ii;
  var UintqualitReqiredMonthly=0;
  var uint,qualitReqiredMonthly;
  var total=0;
  var totalBox=document.getElementById("totalsss");

  for (i=0;i<rows.length;i++)
  {

    for(ii=0;ii<=rows[i].getElementsByTagName("td").length;ii++)
    {
      qualitReqiredMonthly=(rows[i].getElementsByTagName("td")[2].getElementsByTagName("input")[0].value);
      uint=(rows[i].getElementsByTagName("td")[3].getElementsByTagName("input")[0].value);

      UintqualitReqiredMonthly=qualitReqiredMonthly*uint;
    console.log(rows[i].getElementsByTagName("td")[3].getElementsByTagName("input")[0].value);
    rows[i].getElementsByTagName("td")[4].getElementsByTagName("input")[0].value=UintqualitReqiredMonthly;
    rows[i].getElementsByTagName("td")[5].getElementsByTagName("input")[0].value=UintqualitReqiredMonthly*12;

    
  }
  total=total+Number(rows[i].getElementsByTagName("td")[5].getElementsByTagName("input")[0].value);
    totalBox.value=total;
}
 
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
 cell2.innerHTML = '<input type="text" name="Article" class="form-control" placeholder="نوع الماده"/> '; 
 cell3.innerHTML = '<input type="text" name="liter" class="form-control" placeholder="لتر"/> '; 
 cell4.innerHTML = '<input type="number" name="Uint" class="form-control" placeholder="00"/> '; 
 cell5.innerHTML = '<input type="number" name="qualitReqiredMonthly" class="form-control" placeholder="000"/> ';
 cell6.innerHTML = '<input disabled type="number" name="totalss" class="form-control" placeholder="00000"/> ';
 cell7.innerHTML = '<input disabled type="number" name="totalsss" class="form-control" placeholder="000000"/> ';
 cell8.innerHTML = '  <button type="button" class="btn btn-danger" class=btn btn-primary" id="add-row" onclick="deleteRow(\''+id+'\')"> حذف</button> '; 
 }
 // المنافع العامة
 function calculateTotals()
 {
  var amount=document.getElementById("Monthlycost").value;

 }


 function deleteRow(id) 
{
	document.getElementById(id).remove() 
	} function benefits()
	{ 
  var table = document.getElementById("benefits");
  
  
  var table1 = document.getElementById("benefits").getElementsByTagName("tbody")[0];
  var rows=table1.getElementsByTagName("tr");
  var i;
  var ii;
  var Monthlycost=0;
  var total=0;
  var totalBox=document.getElementById("yearcost");

  for (i=0;i<rows.length;i++)
  {

    for(ii=0;ii<=rows[i].getElementsByTagName("td").length;ii++)
    {
      Monthlycost=(rows[i].getElementsByTagName("td")[1].getElementsByTagName("input")[0].value);

      Monthlycost=Monthlycost;
    console.log(rows[i].getElementsByTagName("td")[2].getElementsByTagName("input")[0].value);
    rows[i].getElementsByTagName("td")[2].getElementsByTagName("input")[0].value=Monthlycost;
    rows[i].getElementsByTagName("td")[2].getElementsByTagName("input")[0].value=Monthlycost*12;

    
  }
  total=total+Number(rows[i].getElementsByTagName("td")[2].getElementsByTagName("input")[0].value);
    totalBox.value=total;
}
	// GET TOTAL NUMBER OF ROWS 
var x =table.rows.length; 
var id = "tbl"+x+12; 
var row = table.insertRow(x); 
row.id=id;
 var cell1 = row.insertCell(0); 
 var cell2 = row.insertCell(1); 
 var cell3 = row.insertCell(2); 
 var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
 cell1.outerHTML = `<th> ${x}</th>`; 
 cell2.innerHTML = '<input type="text" name="item" class="form-control" placeholder="الماده   "/>'; 
 cell3.innerHTML = '<input type="number" name="Monthlycost" class="form-control" placeholder="00000"/>'; 
 cell4.innerHTML = '<input disabled type="number" name="yearcost" class="form-control" placeholder="0000000"/>'; 
 cell5.innerHTML = '  <button type="button" class="btn btn-danger" class=btn btn-primary" id="add-row" onclick="deleteRow(\''+id+'\')"> حذف</button> '; 
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