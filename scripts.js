
$(document).ready(function() {
    let editIndex = null;

    // Event handler untuk tombol Tambah Mahasiswa
    $('#addStudentBtn').click(function() {
        $('#modalTitle').text('Tambah Mahasiswa');
        $('#studentForm')[0].reset();
        $('#studentModal').removeClass('hidden');
        editIndex = null; // Reset indeks edit
    });

    // Event handler untuk form Tambah/Edit Mahasiswa
    $('#studentForm').submit(function(e) {
        e.preventDefault();
        const name = $('#studentName').val();
        const nim = $('#studentNIM').val();

        if (editIndex === null) {
            // Tambah mahasiswa baru
            const row = `
                <tr>
                    <td class="py-2 px-4">${$('#studentTableBody tr').length + 1}</td>
                    <td class="py-2 px-4">${name}</td>
                    <td class="py-2 px-4">${nim}</td>
                    <td class="py-2 px-4">
                        <button class="edit-btn bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
                        <button class="delete-btn bg-red-500 text-white px-2 py-1 rounded">Hapus</button>
                    </td>
                </tr>
            `;
            $('#studentTableBody').append(row);
        } else {
            // Edit data mahasiswa yang sudah ada
            const row = $('#studentTableBody tr').eq(editIndex);
            row.find('td').eq(1).text(name);
            row.find('td').eq(2).text(nim);
        }

        $('#studentModal').addClass('hidden');
    });

    // Event handler untuk tombol Edit
    $(document).on('click', '.edit-btn', function() {
        const row = $(this).closest('tr');
        editIndex = row.index();
        $('#studentName').val(row.find('td').eq(1).text());
        $('#studentNIM').val(row.find('td').eq(2).text());
        $('#modalTitle').text('Edit Mahasiswa');
        $('#studentModal').removeClass('hidden');
    });

    // Event handler untuk tombol Hapus
    $(document).on('click', '.delete-btn', function() {
        const row = $(this).closest('tr');
        const index = row.index();

        Swal.fire({
            title: 'Yakin ingin menghapus?',
            text: 'Data ini akan hilang selamanya!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ya, hapus!',
            cancelButtonText: 'Batal'
        }).then((result) => {
            if (result.isConfirmed) {
                row.remove();
                // Update nomor urut setelah penghapusan
                $('#studentTableBody tr').each(function(i) {
                    $(this).find('td').eq(0).text(i + 1);
                });
                Swal.fire('Terhapus!', 'Data berhasil dihapus.', 'success');
            }
        });
    });

    // Event handler untuk tombol Log Out
    $('#logoutBtn').click(function() {
        Swal.fire({
            title: 'Log Out?',
            text: 'Anda yakin ingin keluar?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ya, keluar',
            cancelButtonText: 'Batal'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Logged Out', 'Anda telah keluar.', 'success');
                // Contoh redirect:
                // window.location.href = 'login.html';
            }
        });
    });

    // Close modal ketika area di luar modal di-klik
    $('#studentModal').click(function(e) {
        if ($(e.target).is('#studentModal')) {
            $('#studentModal').addClass('hidden');
        }
    });
});
