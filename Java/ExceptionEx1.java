
class SachinException extends  Exception{
    public SachinException (String message){
         super(message);
    }
}
class ExceptionEx1{
    public static void main(String[] args) throws SachinException {
        int i = 20;
        int j = 10;
       try{
        System.out.println(i / j);
        if(i / j == 2){
            throw new SachinException(" I don't want this value ");
        }
       }catch(ArrayIndexOutOfBoundsException e){
        System.out.println(" Array sized is not in range " + e);
       }catch(ArithmeticException e ){
        System.out.println(" Value is 2"+ e);
       }

       System.out.println(" Endend");
    }
}