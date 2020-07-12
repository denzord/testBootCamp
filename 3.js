function cetak_gambar(panjang){
let m, n;
    for (m = 1; m <= panjang; m++) {
        if (m%2 == 1) {
            for (n = 1; n <= panjang; n++) {
                if (n%2==1) {
                    document.write(" = ");
                }
                else if (n%2==0) {
                    document.write(" * ");
                }
            }
        }

        if (m%2 == 0) {
            for (n = 1; n <= panjang; n++) {
                if (n%2==1) {
                    document.write(" * ");
                }
                else if (n%2==0) {
                    document.write(" = ");
                }
            }
        }
        document.write('<br/>')
    }
}