public class EncapsulationEx1 {
    private int bal;

    public int setBal(int bal){
        return  this.bal = bal;
    }
    public int getBal(){
        return this.bal;
    }
    public static void main(String[] args) {
        EncapsulationEx1 e1 = new EncapsulationEx1();
        System.out.println(e1.getBal());
        e1.setBal(3000);
        System.out.println(e1.getBal());
    }
}
