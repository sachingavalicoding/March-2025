

public class StringsEx1 {
    public static void main(String[] args) {
        String str = "abccba";

        // reverse string
        //String rev = "";
        // // method 1
        // for(int i = str.length() - 1; i >= 0; i--){
        // rev += str.charAt(i);
        // }

        // System.out.println(rev);
        // method 2
        // System.out.println( str.startsWith("a"));
        // System.out.println( str.endsWith("e"));
        // System.out.println(str.contains("b"));

        // StringBuilder str1 = new StringBuilder("abcdefg");
        // System.out.println(str1.reverse());
        // str1.append(40);
        // System.out.println(str1);

        if (isPalindrome2(str , 0 , str.length() -1 )) {
            System.out.println(" Yes ");
        } else {
            System.out.println("No");
        }
    }

    public static boolean isPalindrome(String str) {
        int start = 0;
        int end = str.length() - 1;
        while (start < end) {
            if (!(str.charAt(start) == str.charAt(end))) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }

    public static boolean isPalindrome1(String str){
        return str.equals(new StringBuilder(str).reverse().toString());
    }

    public static boolean isPalindrome2(String str , int left , int right){
        if(left >= right) return true;
        return ( (str.charAt(left) == str.charAt(right)) && isPalindrome2(str, left + 1, right -1) );
    }
}
