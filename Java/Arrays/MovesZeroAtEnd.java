public class MovesZeroAtEnd {
    public static void main(String[] args) {
        int arr [] = {1,3,0,6,0,2,0,0};
        int result [] = new int[arr.length];
        int k = 0;
        for(int i = 0; i < arr.length; i++){
            if(arr[i] != 0){
                result[k++] = arr[i];
            }
        }
        while(k < arr.length){
            result[k++] = 0;
        }

        for(int i : result){
            System.out.print(i + " ");
        }
    }
}
