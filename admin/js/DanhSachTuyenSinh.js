function DanhSachTuyenSinh(){
    this.DSTS =[];
    
    this.ThemSinhVien = function(themSv){
        this.DSTS.push(themSv);
    }
    this.XoaSinhVien = function(listSv){
        for(var i=0; i< listSv.length; i++){
            for(var j=0; j< this.DSTS.length; j++){
                var sv = this.DSTS[j];
                console.log(sv);
                if(listSv[i] == sv.MaSV){
                    this.DSTS.splice(j,1);
                }
            }
        }

    }

    this.TimKiemSinhVien = function(tukhoa){
        var lstkqtimkiem = new DanhSachTuyenSinh();
        for(var i=0; i<this.DSTS.length; i++){
            var sv = this.DSTS[i];
            if(sv.MaSV.toUpperCase().trim().search(tukhoa.svUpdate().trim()) !=-1){
                lstkqtimkiem.ThemSinhVien(sv);
            }
        }
        return lstkqtimkiem;
    }

    this.SuaSinhVien = function(svCapNhat){
        for(var i=0; i<this.DSTS.length; i++){
            var svUpdate = this.DSTS[i];
            if(svCapNhat.MaSV === svUpdate.MaSV){
                svUpdate.Name = svCapNhat.Name;
                svUpdate.Sdt = svCapNhat.Sdt;
                svUpdate.Mail = svCapNhat.Mail;
                svUpdate.QueQuan = svCapNhat.QueQuan;
                svUpdate.Nganh = svCapNhat.Nganh;
            }
        }
        return this;
    }

    this.timsv = function(masv){
        for(var i=0; i<this.DSTS.length; i++){
            var sv = this.DSTS[i];
            if(masv === sv.MaSV){
                return sv;
            }
        }return null;
    }

    this.maduynhat = function(masv){
        for(var i=0; i<this.DSTS.length; i++){
            var sv = this.DSTS[i];
            if(((masv.trim()) === sv.MaSV) || masv.trim()===""){
                return true;
            }
        }return false;
    }

}