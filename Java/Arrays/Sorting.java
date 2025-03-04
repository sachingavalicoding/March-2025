public class Sorting {
    public static int [] bubble(int [] arr){
        for(int i = 0; i < arr.length; i++){
            for(int j = 0; j < arr.length-i-1; j++){
                if(arr[j] > arr[j+1]){
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        return arr;
    }
    public static void main(String[] args) {
        int [] arr = {12,3,23,43,34};
        for(int i : bubble(arr)){
            System.out.print(i + " ");
        }
    }
}
