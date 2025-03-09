public class Account {
    private String accountHolder;
    private double balance;


    // constructor
    public Account(String accountHolder , double intialBalance){
        this.accountHolder = accountHolder;
        this.balance = intialBalance;
    }

    public void deposit(double amount){
        if(amount > 0){
            balance += amount;
            System.out.println(" Deposited Amount ");
        }else{
            System.out.println(" Invalid Amount");
        }
    }

    public void withdraw(double amount){
        if(amount > 0 && amount <= balance){
            balance -= amount;
            System.out.println(" Withdraw Amount ");
        }
        else{
            System.out.println(" Invalid Amount ");
        }
    }

    public double getBalance(){
        return balance;
    }
    public String getAccountHolderName(){
        return accountHolder;
    }
}
