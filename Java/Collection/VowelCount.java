public class VowelCount {
    public static void main(String[] args) {
        String str = "abcdedf";
        String vowel = "aeiou";
        int countV = 0;
        int countC = 0;
        for(int i = 0 ; i < str.length(); i++){
            char ch = Character.toLowerCase(str.charAt(i));
            if(vowel.indexOf(ch) != -1){
                countV++;
            }
            else{
                countC++;
            }
        }
        System.out.println(" Vowels " + countV);
        System.out.println(" Consonents  " + countC);
    }
}
