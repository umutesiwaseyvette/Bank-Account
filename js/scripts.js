var currentAccount = "";
$(function(){
    $("#new-contact").submit(function(event){
      event.preventDefault();
  
      var userName = $("#new-first-name").val();
      var balance = parseFloat($("#new-initial-amount").val());
      if(isNaN(balance))
      {
        balance = 0;
      }
      var newAccount = new BankAccount(userName,balance);
      currentAccount = newAccount;
      newAccount.output();
    });
  
    $("#form-balance").submit(function(event){
      event.preventDefault();
      if(currentAccount != "")
      {
        var deposit = parseFloat($("#input-deposit").val());
        var withdraw = parseFloat($("#input-withdraw").val());
        if(isNaN(deposit))
        {
          deposit = 0;
        }
        if(isNaN(withdraw))
        {
          withdraw = 0;
        }
        var temp = deposit-withdraw;
        currentAccount.changeBalance(temp);
        currentAccount.output();
      }
    });
  
  });
  
  //Create a constructor for object Task
  function BankAccount(inputUserName,inputBalance){
    this.name = inputUserName;
    this.balance = inputBalance;
  }
  
  BankAccount.prototype.output = function ()
  {
    $(".output-balance").text(formatRWF(this.balance));
  };
  
  BankAccount.prototype.changeBalance = function (amount)
  {
    this.balance += amount;
  }
  
  function clear(temp)
  {
    $(temp).val("");
  }
  
  function formatRWF(tempString)
  {
    return tempString.toLocaleString('en-RWF',{style: 'currency', currency: 'RWF'});
  }